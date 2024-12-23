import { motion } from "framer-motion";

export default function AboutSection({ title, content, delay, direction }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
      {content.map((paragraph, index) => (
        <p key={index} className="text-gray-300 leading-relaxed mb-6 last:mb-0">
          {paragraph}
        </p>
      ))}
    </motion.div>
  );
}