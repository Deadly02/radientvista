import { motion } from "framer-motion";
import { WA_MESSAGES, waLink } from "../data/site";
import { WhatsAppIcon } from "./icons";

// Floating WhatsApp Button. initial={false}: rendered at full size in the server HTML.
export const FloatingWhatsApp = () => (
  <motion.a
    href={waLink(WA_MESSAGES.general)}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with Radiant Vista on WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all btn-hover-effect"
    initial={false}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.92 }}
    transition={{ type: "spring", stiffness: 260, damping: 20 }}
  >
    <WhatsAppIcon className="w-8 h-8" />
  </motion.a>
);
