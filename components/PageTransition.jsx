"use client";

import { AnimatePresence } from 'framer-motion';

function PageTransition({ children }) {
  return (
    <AnimatePresence>
      {children}
    </AnimatePresence>
  )
}

export default PageTransition
