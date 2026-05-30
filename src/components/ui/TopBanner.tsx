'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(false);

  // Show on first visit unless dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('top_banner_dismissed') === 'true';
    if (!dismissed) {
      // Show after short delay so it doesn't clash with other popups
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('top_banner_dismissed', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed left-0 right-0 top-0 z-[10001] bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] px-4 py-2 text-center text-sm text-white md:hidden"
        >
          <span className="font-medium">Today's Growth Offers – Flat ₹500 off on your first service!</span>
          <button
            onClick={handleClose}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 hover:bg-white/10"
            aria-label="Close banner"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
