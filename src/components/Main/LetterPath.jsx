import { motion } from "framer-motion";

// Rutas de letras predefinidas
const letterPaths = {
  A: "M5 20L10 5L15 20M7 14H13",
  N: "M5 20V5L15 20V5",
  D: "M5 20V5H10Q15 5 15 12.5T10 20H5",
  R: "M5 20V5H10Q15 5 15 10T10 15H5M10 15L15 20",
  E: "M5 20V5H15M5 12.5H12M5 20H15",
  Y: "M5 5L10 12.5V20M15 5L10 12.5",
  O: "M10 5C13.5 5 16 8 16 12.5C16 17 13.5 20 10 20C6.5 20 4 17 4 12.5C4 8 6.5 5 10 5",
  Ó: "M10 5C13.5 5 16 8 16 12.5C16 17 13.5 20 10 20C6.5 20 4 17 4 12.5C4 8 6.5 5 10 5M10 2L12 0",
  G: "M15 5H5V20H15V12.5H10",
  M: "M5 20V5L10 15L15 5V20",
  Z: "M5 5H15L5 20H15",
  " ": "",
};

const LetterPath = ({ char, delay = 0 }) => {
  // Variantes de la animación con tweens en lugar de springs para mejor rendimiento
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          delay: 0.6 + delay * 0.05,
          type: "tween",
          duration: 1.5,
          ease: "easeInOut",
        },
        opacity: {
          delay: 0.6 + delay * 0.05,
          duration: 0.1,
        },
      },
    },
  };

  return (
    <motion.path
      d={letterPaths[char] || ""}
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      strokeDasharray="0 1"
      style={{ willChange: "opacity, stroke-dashoffset" }}
    />
  );
};

export default LetterPath;
