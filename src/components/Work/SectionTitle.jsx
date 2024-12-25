import React from "react";
import { motion } from "framer-motion";

export default function SectionTitle({ children }) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="text-3xl font-bold text-white mb-8 relative inline-block"
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 w-1/3 h-0.5 bg-white/30" />
      </span>
    </motion.h2>
  );
}
