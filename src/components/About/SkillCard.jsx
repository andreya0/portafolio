import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ category, skills, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 + index * 0.01, duration: 0.5 }}
      className="relative overflow-hidden rounded-lg mt-4"
    >
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, skillIndex) => (
          <motion.div
            key={skillIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.7 + index * 0.1 + skillIndex * 0.05,
              duration: 0.3,
            }}
            className="bg-white/10 text-white text-sm px-3 py-1 rounded-full flex items-center gap-2 hover:bg-white/20"
          >
            <svg className="w-4 h-4 text-gray-300 ">
              <use href={`/icons/icon-sprite.svg#icon-${skill.iconName}`} />
            </svg>
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
