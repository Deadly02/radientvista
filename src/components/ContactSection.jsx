import { Mail, MapPin, Phone } from "lucide-react";
import { Section } from "./Section";
import { ContactForm } from "./ContactForm";
import { ADDRESS_LINE, EMAIL, PHONES } from "../data/site";

// Contact details (NAP) + enquiry form. Used on the home page (#contact).
export const NapList = ({ dark = true }) => {
  const muted = dark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-hubli-sunset";
  const head = dark ? "font-bold text-lg" : "font-bold text-lg text-hubli-dark";
  const icon = dark ? "p-4 bg-white/10 rounded-lg text-hubli-sunset" : "p-4 bg-hubli-light rounded-lg text-hubli-sunset";
  return (
    <div className="space-y-8">
      <div className="flex items-start gap-4">
        <div className={icon}>
          <Phone className="w-6 h-6" />
        </div>
        <div>
          <h3 className={head}>Phone</h3>
          <p className={`${muted} mt-1 transition-colors`}>
            <a href={`tel:${PHONES.reservations.tel}`}>{`${PHONES.reservations.display} (Reservations & WhatsApp)`}</a>
          </p>
          <p className={`${muted} transition-colors`}>
            <a href={`tel:${PHONES.primary.tel}`}>{`${PHONES.primary.display} (Front Desk)`}</a>
          </p>
          <p className={`${muted} transition-colors`}>
            <a href={`tel:${PHONES.secondary.tel}`}>{`${PHONES.secondary.display} (Front Desk)`}</a>
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className={icon}>
          <Mail className="w-6 h-6" />
        </div>
        <div>
          <h3 className={head}>Email</h3>
          <p className={`${muted} mt-1 break-all transition-colors`}>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className={icon}>
          <MapPin className="w-6 h-6" />
        </div>
        <div>
          <h3 className={head}>Address</h3>
          <address className={`not-italic ${dark ? "text-gray-400" : "text-gray-600"} mt-1 leading-relaxed`}>
            Radiant Vista, {ADDRESS_LINE}, India
          </address>
        </div>
      </div>
    </div>
  );
};

export const ContactSection = () => (
  <Section id="contact" labelledBy="contact-title" className="bg-hubli-dark text-white relative">
    <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" />
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="text-center mb-16">
        <span className="text-hubli-sunset font-bold tracking-widest uppercase text-sm">Contact Us</span>
        <h2 id="contact-title" className="text-4xl font-serif font-bold mt-2">
          {"Contact & Reservations"}
        </h2>
        <p className="text-gray-400 mt-4">For room reservations, banquet bookings, table reservations and event enquiries:</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <NapList />
        </div>
        <div className="lg:col-span-2 bg-white rounded-lg p-8 md:p-10 text-gray-800 shadow-2xl">
          <h3 className="text-2xl font-serif font-bold text-hubli-green mb-6">Send us a message</h3>
          <ContactForm idPrefix="home-contact" source="home" />
        </div>
      </div>
    </div>
  </Section>
);
