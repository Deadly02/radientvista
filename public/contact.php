<?php
// Radiant Vista website enquiry handler (POST from the home page and /contact/).
// Sends the enquiry to the reservations mailbox with PHP mail():
//   From:     an address on hotelradiantvista.com (SPF-aligned; envelope sender set with -f)
//   Reply-To: the guest's email address, when they gave a valid one
// Responds with JSON for the JavaScript form and with a small HTML page without JavaScript.
declare(strict_types=1);

const MAIL_TO = 'reservations@hotelradiantvista.com';
const MAIL_FROM = 'website@hotelradiantvista.com';   // any address on this domain; create it or a forwarder to receive bounces
const MAIL_FROM_NAME = 'Radiant Vista Website';
const RATE_LIMIT = 5;                                  // max enquiries ...
const RATE_WINDOW = 600;                               // ... per IP address per 10 minutes

$wantsJson = stripos((string) ($_SERVER['HTTP_ACCEPT'] ?? ''), 'application/json') !== false;

function respond(bool $ok, string $error = '', int $status = 200): void
{
    global $wantsJson;
    http_response_code($status);
    header('Cache-Control: no-store');
    header('X-Robots-Tag: noindex');
    if ($wantsJson) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['ok' => $ok, 'error' => $error]);
        exit;
    }
    header('Content-Type: text/html; charset=utf-8');
    $title = $ok ? 'Thank you' : 'Message not sent';
    $text = $ok
        ? 'Your message has been sent. Our team will get back to you shortly.'
        : ($error !== '' ? $error . ' ' : '') . 'You can also call or WhatsApp +91 91871 95517.';
    echo '<!DOCTYPE html><html lang="en-IN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">'
        . '<meta name="robots" content="noindex"><title>' . $title . ' | Radiant Vista</title></head>'
        . '<body style="font-family:Arial,sans-serif;background:#fafaf9;color:#292524;padding:48px 16px;text-align:center">'
        . '<h1 style="color:#14532d">' . $title . '</h1><p>' . htmlspecialchars($text, ENT_QUOTES, 'UTF-8') . '</p>'
        . '<p><a href="/" style="color:#78350f;font-weight:bold">Back to Radiant Vista</a></p></body></html>';
    exit;
}

function cut(string $s, int $max): string
{
    return function_exists('mb_substr') ? mb_substr($s, 0, $max, 'UTF-8') : substr($s, 0, $max);
}

// Single-line field: no tags, no control characters (CR/LF included), collapsed whitespace, length-capped.
function line(string $name, int $max): string
{
    $v = (string) ($_POST[$name] ?? '');
    $v = strip_tags($v);
    $v = preg_replace('/[\x00-\x1F\x7F]+/u', ' ', $v) ?? '';
    $v = preg_replace('/\s+/u', ' ', $v) ?? '';
    return cut(trim($v), $max);
}

// Multi-line field: keeps line breaks and tabs, removes other control characters and tags.
function text(string $name, int $max): string
{
    $v = str_replace(["\r\n", "\r"], "\n", (string) ($_POST[$name] ?? ''));
    $v = strip_tags($v);
    $v = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]+/u', '', $v) ?? '';
    return cut(trim($v), $max);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(false, 'Method not allowed.', 405);
}

// Only accept submissions sent from our own pages.
$origin = (string) ($_SERVER['HTTP_ORIGIN'] ?? '');
if ($origin !== '' && !preg_match('#^https://(www\.)?hotelradiantvista\.com$#i', $origin)) {
    respond(false, 'Forbidden.', 403);
}

// Honeypot: hidden from people, filled in by bots. Pretend success so bots learn nothing.
if (line('company', 200) !== '') {
    respond(true);
}

$name = line('name', 120);
$phone = line('phone', 20);
$emailRaw = line('email', 160);
$message = text('message', 4000);
$source = preg_replace('/[^a-z0-9-]/i', '', line('source', 40)) ?: 'website';

$len = function_exists('mb_strlen') ? mb_strlen($message, 'UTF-8') : strlen($message);
if ($name === '' || !preg_match('/^[0-9+\s-]{10,15}$/', $phone) || $len < 10) {
    respond(false, 'Please fill in your name, a valid phone number and a message.', 422);
}
$email = '';
if ($emailRaw !== '') {
    $email = (string) filter_var($emailRaw, FILTER_VALIDATE_EMAIL);
    if ($email === '') {
        respond(false, 'Please enter a valid email address.', 422);
    }
}

// Basic per-IP rate limit, stored in the account's temp directory.
$ip = (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
$bucket = rtrim(sys_get_temp_dir(), '/\\') . '/rv-contact-' . hash('sha256', $ip);
$now = time();
$stored = is_file($bucket) ? json_decode((string) @file_get_contents($bucket), true) : [];
$hits = array_values(array_filter(is_array($stored) ? $stored : [], fn($t) => is_int($t) && $t > $now - RATE_WINDOW));
if (count($hits) >= RATE_LIMIT) {
    respond(false, 'Too many messages in a short time.', 429);
}
$hits[] = $now;
@file_put_contents($bucket, json_encode($hits), LOCK_EX);

$subject = 'Website enquiry from ' . $name;
$body = "New enquiry from hotelradiantvista.com (form: {$source})\n\n"
    . "Name: {$name}\n"
    . "Phone: {$phone}\n"
    . 'Email: ' . ($email !== '' ? $email : 'not provided') . "\n\n"
    . "Message:\n{$message}\n";
$headers = [
    'From: ' . MAIL_FROM_NAME . ' <' . MAIL_FROM . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: RadiantVista/1.1',
];
if ($email !== '') {
    $headers[] = 'Reply-To: ' . $email;
}

$sent = mail(MAIL_TO, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers), '-f' . MAIL_FROM);
respond($sent, $sent ? '' : 'Sorry, your message could not be sent.', $sent ? 200 : 500);
