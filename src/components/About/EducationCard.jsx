import { motion, useInView, useAnimation } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SkillCard from "./SkillCard";
import { useRef, useEffect } from "react";

const containerVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.09,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: [0, 0.8, 1],
    scale: [0.8, 1.1, 1],
    rotate: [10, 0],
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: [1, 0.2, 0],
    scale: [1, 0.5],
    rotate: [0, -20],
    transition: {
      duration: 0.1,
      ease: "easeIn",
    },
  },
};

export default function EducationCard({ education, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="bg-black/25 rounded-lg p-6 hover:bg-black/50 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="flex items-start gap-4">
        <motion.div
          variants={textVariants}
          className="p-2 bg-white/10 rounded-lg hidden sm:block"
        >
          <GraduationCap className="w-6 h-6 text-white" />
        </motion.div>
        <div className="flex-1">
          <motion.h3
            variants={textVariants}
            className="text-xl font-semibold text-white"
          >
            {education.degree}
          </motion.h3>
          <motion.p variants={textVariants} className="text-gray-400 mt-1">
            {education.institution}
          </motion.p>
          <motion.p
            variants={textVariants}
            className="text-gray-500 text-sm mt-1"
          >
            {education.year}
          </motion.p>
          <motion.p
            variants={textVariants}
            className="text-gray-300 mt-3"
            dangerouslySetInnerHTML={{ __html: education.description }}
          />
          {education.skills && education.skills.length > 0 && (
            <motion.div variants={textVariants}>
              <SkillCard
                category="Skills"
                skills={education.skills}
                index={index}
              />
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
