import * as React from "react";
import { FORM_ENDPOINT, PHONES, WA_MESSAGES, waLink } from "../data/site";
import { track } from "../lib/analytics";

const FIELD =
  "w-full px-4 py-3 bg-gray-50 border rounded-sm focus:outline-none focus:border-hubli-sunset transition-colors";

// Enquiry form. Works without JavaScript (plain POST to FORM_ENDPOINT); with JavaScript it
// validates inline, submits with fetch and shows a success or error state.
export const ContactForm = ({ idPrefix = "contact", source = "website" }) => {
  const [status, setStatus] = React.useState("idle"); // idle | sending | sent | error
  const [errors, setErrors] = React.useState({});
  const id = (f) => `${idPrefix}-${f}`;

  const validate = (fd) => {
    const e = {};
    if (!String(fd.get("name") || "").trim()) e.name = "Please enter your full name.";
    if (!/^[0-9+\s-]{10,15}$/.test(String(fd.get("phone") || "").trim())) e.phone = "Please enter a valid phone number.";
    const email = String(fd.get("email") || "").trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Please enter a valid email address.";
    if (String(fd.get("message") || "").trim().length < 10) e.message = "Please write at least 10 characters.";
    return e;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const fd = new FormData(form);
    const e = validate(fd);
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus("sending");
    try {
      const res = await fetch(form.action, { method: "POST", body: fd, headers: { Accept: "application/json" } });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "send failed");
      setStatus("sent");
      form.reset();
      track("form_submit", { form: source });
    } catch {
      setStatus("error");
    }
  };

  const err = (f) =>
    errors[f] ? (
      <p id={id(`${f}-error`)} className="text-red-600 text-xs mt-1 font-medium">
        {errors[f]}
      </p>
    ) : null;
  const aria = (f) => (errors[f] ? { "aria-invalid": true, "aria-describedby": id(`${f}-error`) } : {});

  return (
    <form action={FORM_ENDPOINT} method="post" onSubmit={onSubmit} noValidate className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <input type="hidden" name="source" value={source} />
      {/* Honeypot: hidden from people, filled in by bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={id("company")}>Company</label>
        <input id={id("company")} type="text" name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="md:col-span-2">
        <label htmlFor={id("name")} className="block text-sm font-semibold text-gray-600 mb-2">
          Full name *
        </label>
        <input
          id={id("name")}
          name="name"
          type="text"
          required
          autoComplete="name"
          className={`${FIELD} ${errors.name ? "border-red-500" : "border-gray-200"}`}
          {...aria("name")}
        />
        {err("name")}
      </div>
      <div>
        <label htmlFor={id("phone")} className="block text-sm font-semibold text-gray-600 mb-2">
          Phone *
        </label>
        <input
          id={id("phone")}
          name="phone"
          type="tel"
          inputMode="tel"
          required
          pattern="[0-9+\s\-]{10,15}"
          autoComplete="tel"
          className={`${FIELD} ${errors.phone ? "border-red-500" : "border-gray-200"}`}
          {...aria("phone")}
        />
        {err("phone")}
      </div>
      <div>
        <label htmlFor={id("email")} className="block text-sm font-semibold text-gray-600 mb-2">
          Email
        </label>
        <input
          id={id("email")}
          name="email"
          type="email"
          autoComplete="email"
          className={`${FIELD} ${errors.email ? "border-red-500" : "border-gray-200"}`}
          {...aria("email")}
        />
        {err("email")}
      </div>
      <div className="md:col-span-2">
        <label htmlFor={id("message")} className="block text-sm font-semibold text-gray-600 mb-2">
          Message *
        </label>
        <textarea
          id={id("message")}
          name="message"
          rows={4}
          required
          minLength={10}
          className={`${FIELD} ${errors.message ? "border-red-500" : "border-gray-200"}`}
          placeholder="Dates, number of guests, and what you need"
          {...aria("message")}
        />
        {err("message")}
      </div>
      <div className="md:col-span-2" aria-live="polite">
        {status === "sent" && (
          <p className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm rounded-sm text-center font-medium">
            Thank you. Your message has been sent and our team will get back to you shortly.
          </p>
        )}
        {status === "error" && (
          <p className="p-3 bg-red-50 border border-red-200 text-red-800 text-sm rounded-sm text-center font-medium">
            Sorry, your message could not be sent. Please call {PHONES.reservations.display} or{" "}
            <a href={waLink(WA_MESSAGES.rooms)} target="_blank" rel="noopener noreferrer" className="underline font-semibold">
              message us on WhatsApp
            </a>
            .
          </p>
        )}
      </div>
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className={`w-full py-4 bg-hubli-earth text-white font-bold tracking-widest uppercase hover:bg-hubli-green transition-all rounded-sm shadow-lg btn-hover-effect ${status === "sending" ? "opacity-75 cursor-not-allowed" : "cursor-pointer"}`}
        >
          {status === "sending" ? "Sending..." : "Send Enquiry"}
        </button>
      </div>
    </form>
  );
};
