import * as React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Section } from "./Section";
import { EMAIL, PHONES, WA_PHONE } from "../data/site";

// Contact Section with Form Validation and WhatsApp Submission
export const ContactSection = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = React.useState({});
  const [statusMsg, setStatusMsg] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const handleChange = (field, val) => {
    setFormData((prev) => ({
      ...prev,
      [field]: val,
    }));
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    const newErrors = {};
    const nameVal = formData.name.trim();
    const phoneVal = formData.phone.trim();
    const emailVal = formData.email.trim();
    const msgVal = formData.message.trim();
    if (!nameVal) {
      newErrors.name = "Please enter your full name.";
    }
    if (!phoneVal || phoneVal.length !== 10 || !/^\d{10}$/.test(phoneVal)) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }
    if (emailVal && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!msgVal || msgVal.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    setStatusMsg("Opening WhatsApp to send your enquiry...");
    const text = [
      "Hello Radiant Vista Hotel,",
      "",
      "I would like to make an enquiry.",
      "",
      `Name: ${nameVal}`,
      `Phone: ${phoneVal}`,
      `Email: ${emailVal || "Not provided"}`,
      "",
      "Message:",
      msgVal,
      "",
      "Thank you.",
    ].join("\n");
    const waUrl = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setTimeout(() => {
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      setIsSubmitting(false);
      setTimeout(() => setStatusMsg(""), 5000);
    }, 1200);
  };
  return (
    <Section id="contact" labelledBy="contact-title" className="bg-hubli-dark text-white relative">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-hubli-sunset font-bold tracking-widest uppercase text-sm">Contact Us</span>
          <h2 id="contact-title" className="text-4xl font-serif font-bold mt-2">
            {"Contact & Reservations"}
          </h2>
          <p className="text-gray-400 mt-4">
            For room reservations, banquet bookings, table reservations, and event enquiries:
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-4 bg-white/10 rounded-lg text-hubli-sunset">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Phone</h3>
                <p className="text-gray-400 mt-1 hover:text-white transition-colors">
                  <a href={`tel:${PHONES.reservations.tel}`}>{`${PHONES.reservations.display} (Reservations)`}</a>
                </p>
                <p className="text-gray-400 hover:text-white transition-colors">
                  <a href={`tel:${PHONES.primary.tel}`}>{`${PHONES.primary.display} (Front Desk)`}</a>
                </p>
                <p className="text-gray-400 hover:text-white transition-colors">
                  <a href={`tel:${PHONES.secondary.tel}`}>{PHONES.secondary.display}</a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-4 bg-white/10 rounded-lg text-hubli-sunset">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Email</h3>
                <p className="text-gray-400 mt-1 break-all">
                  <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">
                    {EMAIL}
                  </a>
                </p>
                <p className="text-gray-400 mt-1 break-all">
                  <a href="https://hotelradiantvista.com/" className="hover:text-white transition-colors">
                    hotelradiantvista.com
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-4 bg-white/10 rounded-lg text-hubli-sunset">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Address</h3>
                <p className="text-gray-400 mt-1 leading-relaxed">
                  {"Plot No 04, S/No 106A, 107B, 108A & 109A,"}
                  <br />
                  Gokul Road, Akshay Park,
                  <br />
                  Hubballi, Dharwad District,
                  <br />
                  Karnataka 580030
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 bg-white rounded-lg p-8 md:p-10 text-gray-800 shadow-2xl">
            <h3 className="text-2xl font-serif font-bold text-hubli-green mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} noValidate={true} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-600 mb-2">Full Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={`w-full px-4 py-3 bg-gray-50 border ${errors.name ? "border-red-500 ring-1 ring-red-500" : "border-gray-200"} rounded-sm focus:outline-none focus:border-hubli-sunset transition-colors`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">Phone *</label>
                <input
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  value={formData.phone}
                  onChange={(e) => {
                    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                    handleChange("phone", digits);
                  }}
                  className={`w-full px-4 py-3 bg-gray-50 border ${errors.phone ? "border-red-500 ring-1 ring-red-500" : "border-gray-200"} rounded-sm focus:outline-none focus:border-hubli-sunset transition-colors`}
                  placeholder="9876543210"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={`w-full px-4 py-3 bg-gray-50 border ${errors.email ? "border-red-500 ring-1 ring-red-500" : "border-gray-200"} rounded-sm focus:outline-none focus:border-hubli-sunset transition-colors`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-600 mb-2">Message *</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className={`w-full px-4 py-3 bg-gray-50 border ${errors.message ? "border-red-500 ring-1 ring-red-500" : "border-gray-200"} rounded-sm focus:outline-none focus:border-hubli-sunset transition-colors`}
                  placeholder="Tell us about your requirements..."
                />
                {errors.message && <p className="text-red-500 text-xs mt-1 font-medium">{errors.message}</p>}
              </div>
              {statusMsg && (
                <div className="md:col-span-2 p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm rounded-sm text-center font-medium">
                  {statusMsg}
                </div>
              )}
              <div className="md:col-span-2 mt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-hubli-earth text-white font-bold tracking-widest uppercase hover:bg-hubli-green transition-all rounded-sm shadow-lg btn-hover-effect ${isSubmitting ? "opacity-75 cursor-not-allowed" : "cursor-pointer"}`}
                >
                  {isSubmitting ? "Opening WhatsApp..." : "Submit Request"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};
