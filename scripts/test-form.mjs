// End-to-end test of the enquiry form against the local mock of /contact.php.
//   node scripts/test-form.mjs [dist]
// Checks: inputs have names and labels; empty submit shows validation errors; a valid submit shows
// the success message and resets the form; a server failure shows the error message; without
// JavaScript the form posts to /contact.php.
import { chromium } from "playwright-core";
import { startServer } from "./serve.mjs";

const dist = process.argv[2] || "dist";
const server = await startServer({ root: dist });
const browser = await chromium.launch({ channel: "chrome" });
let failed = 0;
const check = (ok, msg) => {
  if (!ok) failed++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${msg}`);
};

try {
  const page = await browser.newPage();
  await page.goto(`${server.url}/contact/`, { waitUntil: "networkidle" });
  await page.waitForFunction(() => window.__RV_HYDRATED__ === true);
  const form = page.locator("#enquiry-form form");

  const fields = await form.evaluate((f) =>
    [...f.querySelectorAll("input:not([type=hidden]), textarea")].map((el) => ({
      name: el.name,
      labelled: !!(el.id && f.querySelector(`label[for="${el.id}"]`)),
    }))
  );
  check(fields.every((f) => f.name && f.labelled), `all fields have name + label (${fields.map((f) => f.name).join(", ")})`);
  check((await form.getAttribute("action")) === "/contact.php" && (await form.getAttribute("method")) === "post", "form posts to /contact.php");

  await form.locator("button[type=submit]").click();
  check((await form.locator("[aria-invalid=true]").count()) >= 3, "empty submit shows inline validation errors");

  await page.fill("#contact-page-name", "Test Guest");
  await page.fill("#contact-page-phone", "9876543210");
  await page.fill("#contact-page-email", "guest@example.com");
  await page.fill("#contact-page-message", "Testing the enquiry form, please ignore.");
  process.env.MOCK_FORM = "ok";
  await form.locator("button[type=submit]").click();
  await page.waitForSelector("text=Your message has been sent", { timeout: 5000 }).catch(() => {});
  check(await page.locator("text=Your message has been sent").isVisible(), "valid submit shows success message");
  check((await page.inputValue("#contact-page-name")) === "", "form resets after success");

  await page.fill("#contact-page-name", "Test Guest");
  await page.fill("#contact-page-phone", "9876543210");
  await page.fill("#contact-page-message", "Testing the error state, please ignore.");
  process.env.MOCK_FORM = "fail";
  await form.locator("button[type=submit]").click();
  await page.waitForSelector("text=could not be sent", { timeout: 5000 }).catch(() => {});
  check(await page.locator("text=could not be sent").isVisible(), "server error shows error message with phone/WhatsApp fallback");
  process.env.MOCK_FORM = "ok";

  const noJs = await browser.newContext({ javaScriptEnabled: false });
  const p2 = await noJs.newPage();
  await p2.goto(`${server.url}/contact/`);
  await p2.fill("#contact-page-name", "No JS Guest");
  await p2.fill("#contact-page-phone", "9876543210");
  await p2.fill("#contact-page-message", "Testing without JavaScript.");
  await Promise.all([p2.waitForURL("**/contact.php"), p2.click("#enquiry-form button[type=submit]")]);
  check((await p2.textContent("h1")).includes("Thank you"), "without JavaScript the form posts and shows a thank-you page");
} finally {
  await browser.close();
  await server.close();
}
console.log(failed ? `\n${failed} form check(s) failed` : "\nForm checks passed");
process.exit(failed ? 1 : 0);
