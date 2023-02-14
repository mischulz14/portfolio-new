import React from 'react';
import { motion } from 'framer-motion';

interface UpAndDownHoverProps {
  children?: React.ReactNode;
}

export default function UpAndDownHover({ children }: UpAndDownHoverProps) {
  return (
    // animation for infinite and smooth up and down
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: 10 }}
      transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2 }}
    >
      {children}
    </motion.div>
  );
}
