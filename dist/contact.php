<?php
// Radiant Vista website enquiry handler (POST from the home page and /contact/).
// Sends the enquiry to the reservations mailbox with PHP mail(). Responds with JSON when the
// browser asks for it (JavaScript form), otherwise with a small HTML page (no-JavaScript form).
declare(strict_types=1);

const MAIL_TO = 'reservations@hotelradiantvista.com';
const MAIL_FROM = 'website@hotelradiantvista.com'; // must be an address on this domain for deliverability
const RATE_LIMIT = 5;          // enquiries ...
const RATE_WINDOW = 600;       // ... per IP per 10 minutes

$wantsJson = stripos($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json') !== false;

function respond(bool $ok, string $error = '', int $status = 200): void
{
    global $wantsJson;
    http_response_code($status);
    header('Cache-Control: no-store');
    if ($wantsJson) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['ok' => $ok, 'error' => $error]);
        exit;
    }
    header('Content-Type: text/html; charset=utf-8');
    $title = $ok ? 'Thank you' : 'Message not sent';
    $text = $ok
        ? 'Your message has been sent. Our team will get back to you shortly.'
        : 'Sorry, your message could not be sent. Please call +91 91871 95517 or WhatsApp us on the same number.';
    echo '<!DOCTYPE html><html lang="en-IN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">'
        . '<meta name="robots" content="noindex"><title>' . $title . ' | Radiant Vista</title></head>'
        . '<body style="font-family:Arial,sans-serif;background:#fafaf9;color:#292524;padding:48px 16px;text-align:center">'
        . '<h1 style="color:#14532d">' . $title . '</h1><p>' . htmlspecialchars($text) . '</p>'
        . '<p><a href="/" style="color:#78350f;font-weight:bold">Back to Radiant Vista</a></p></body></html>';
    exit;
}

function field(string $name, int $max): string
{
    $v = trim((string) ($_POST[$name] ?? ''));
    $v = str_replace(["\r", "\0"], '', $v);
    return mb_substr($v, 0, $max);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(false, 'Method not allowed', 405);
}

// Only accept submissions from our own pages.
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && !preg_match('#^https://(www\.)?hotelradiantvista\.com$#i', $origin)) {
    respond(false, 'Forbidden', 403);
}

// Honeypot: real visitors never see or fill this field. Pretend success for bots.
if (field('company', 200) !== '') {
    respond(true);
}

$name = field('name', 120);
$phone = field('phone', 20);
$email = field('email', 160);
$message = field('message', 4000);
$source = preg_replace('/[^a-z0-9-]/i', '', field('source', 40)) ?: 'website';

if ($name === '' || !preg_match('/^[0-9+\s-]{10,15}$/', $phone) || mb_strlen($message) < 10) {
    respond(false, 'Please fill in your name, a valid phone number and a message.', 422);
}
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, 'Please enter a valid email address.', 422);
}

// Simple per-IP rate limit stored in the system temp directory.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$bucket = sys_get_temp_dir() . '/rv-contact-' . hash('sha256', $ip);
$now = time();
$hits = array_filter(
    is_file($bucket) ? (json_decode((string) file_get_contents($bucket), true) ?: []) : [],
    fn($t) => is_int($t) && $t > $now - RATE_WINDOW
);
if (count($hits) >= RATE_LIMIT) {
    respond(false, 'Too many messages. Please call or WhatsApp us instead.', 429);
}
$hits[] = $now;
@file_put_contents($bucket, json_encode(array_values($hits)), LOCK_EX);

$oneLine = fn(string $s) => preg_replace('/[\r\n]+/', ' ', $s);
$subject = 'Website enquiry from ' . $oneLine($name);
$body = "New enquiry from hotelradiantvista.com ({$source})\n\n"
    . 'Name: ' . $oneLine($name) . "\n"
    . 'Phone: ' . $oneLine($phone) . "\n"
    . 'Email: ' . ($email !== '' ? $oneLine($email) : 'not provided') . "\n\n"
    . "Message:\n" . $message . "\n";
$headers = [
    'From: Radiant Vista Website <' . MAIL_FROM . '>',
    'Reply-To: ' . ($email !== '' ? $oneLine($email) : MAIL_FROM),
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: RadiantVista/1.0',
];

$sent = mail(MAIL_TO, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers), '-f' . MAIL_FROM);
respond($sent, $sent ? '' : 'The message could not be sent.', $sent ? 200 : 500);
