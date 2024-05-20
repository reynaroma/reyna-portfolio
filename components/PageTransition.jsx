"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

function PageTransition({ children }) {
  const pathName = usePathname();

  return (
    <AnimatePresence>
      <div key={pathName}>
        <motion.div>

        </motion.div>
        {children}
      </div>
    </AnimatePresence>
  )
}

export default PageTransition
