import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const WhatsAppFAB = () => {
  const whatsappNumber = '+8801537-442752';
  const cleanNumber = whatsappNumber.replace(/[^0-9+]/g, '');
  const whatsappUrl = `https://wa.me/${cleanNumber.replace('+', '')}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 transition-all active:shadow-none"
      title="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="sr-only">WhatsApp Support</span>
      
      {/* Tooltip-like badge for the number */}
      <div className="absolute right-full mr-4 hidden whitespace-nowrap rounded-lg bg-[#0F172A] px-3 py-1.5 text-xs font-black uppercase tracking-widest text-white md:block">
        Support: {whatsappNumber}
      </div>
    </motion.a>
  );
};

export default WhatsAppFAB;
