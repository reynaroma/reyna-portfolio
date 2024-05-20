"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

function PageTransition({ children }) {
  return (
    <AnimatePresence>
      {children}
    </AnimatePresence>
  )
}

export default PageTransition
