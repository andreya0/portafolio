import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import { GraduationCap, ChevronDown, ChevronUp } from "lucide-react";
import SkillCard from "./SkillCard";
import { useTranslation } from "react-i18next";
import {
  containerVariants,
  iconVariants,
  textVariants,
  glowVariants,
} from "../Animations/variants";

export default function EducationCard({ education, index }) {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const descriptionRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "30px",
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (descriptionRef.current) {
      setIsOverflowing(descriptionRef.current.scrollHeight > 95);
    }
  }, [education.description]);

  const handleExpandClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="bg-black/25 backdrop-blur-sm rounded-lg p-6 hover:bg-black/50 transition-all duration-300 relative overflow-hidden group"
    >
      {/* Glow effect */}
      <motion.div
        variants={glowVariants}
        className="absolute -inset-2 bg-gradient-to-r from-cyan-900/20 via-teal-800/30 to-cyan-900/20 rounded-lg blur-xl pointer-events-none"
      />

      <div className="flex items-start gap-4 relative z-10">
        <motion.div
          variants={iconVariants}
          whileHover={{
            rotate: 360,
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
          className="p-3 bg-white/10 rounded-lg hidden sm:block group-hover:bg-white/20 transition-all duration-300 cursor-pointer"
        >
          <GraduationCap className="w-6 h-6 text-white" />
        </motion.div>

        <div className="flex-1 space-y-3">
          <motion.h3
            custom={0}
            variants={textVariants}
            className="text-xl font-semibold text-white"
          >
            {education.degree}
          </motion.h3>

          <motion.p
            custom={1}
            variants={textVariants}
            className="text-gray-400"
          >
            {education.institution}
          </motion.p>

          <motion.p
            custom={2}
            variants={textVariants}
            className="text-gray-500 text-sm"
          >
            {education.year}
          </motion.p>

          <motion.div custom={3} variants={textVariants} className="relative">
            <motion.div
              ref={descriptionRef}
              animate={{ height: isExpanded ? "auto" : "95px" }}
              transition={{ duration: 0.3 }}
              className="text-gray-300 prose prose-invert overflow-hidden"
            >
              <div
                dangerouslySetInnerHTML={{ __html: education.description }}
              />
            </motion.div>

            <AnimatePresence>
              {isOverflowing && !isExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-black/10 to-transparent"
                />
              )}
            </AnimatePresence>

            {isOverflowing && (
              <button
                onClick={handleExpandClick}
                className="mt-2 flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer z-10 relative"
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    {t("showless")}
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    {t("showmore")}
                  </>
                )}
              </button>
            )}
          </motion.div>

          {education.skills && education.skills.length > 0 && (
            <motion.div custom={4} variants={textVariants} className="pt-2">
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
