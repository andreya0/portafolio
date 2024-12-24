export const containerVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    rotateX: 45,
    scale: 0.8,
    transformPerspective: 1000,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 2000,
      stiffness: 750,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

export const iconVariants = {
  hidden: {
    opacity: 0,
    scale: 1,
    rotate: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 360,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 200,
    },
  },
};

export const textVariants = {
  hidden: (custom) => ({
    opacity: 0,
    x: custom % 2 === 0 ? -50 : 50,
    y: -20,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 120,
    },
  },
};

export const glowVariants = {
  hidden: {
    opacity: 0,
    scale: 0.1,
  },
  visible: {
    opacity: [0, 0.55, 0],
    scale: 1.5,
    transition: {
      duration: 3.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};
