import React from "react";
import { Calendar, Building2 } from "lucide-react";
import SkillCard from "../About/SkillCard";
import { motion } from "framer-motion";

export default function ExperienceCard({
  position,
  company,
  period,
  description,
  skills,
  index,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all"
    >
      <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-white/5 via-white/20 to-white/5 group-hover:via-white/30 transition-colors duration-300" />

      <motion.h3
        className="text-xl font-semibold text-white mb-4 relative inline-block"
        whileHover={{ x: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="relative transition-colors duration-300 group-hover:text-cyan-300/80">
          {position}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-300 group-hover:w-full transition-all duration-300" />
        </span>
      </motion.h3>

      <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-6">
        <motion.div
          className="flex items-center gap-2 group/company"
          whileHover={{ scale: 1.05 }}
        >
          <div className="p-1.5 rounded-md bg-white/5 group-hover/company:bg-white/10 transition-colors duration-300">
            <Building2 className="w-4 h-4" />
          </div>
          <span className="text-sm">{company}</span>
        </motion.div>

        <motion.div
          className="flex items-center gap-2 group/period"
          whileHover={{ scale: 1.05 }}
        >
          <div className="p-1.5 rounded-md bg-white/5 group-hover/period:bg-white/10 transition-colors duration-300">
            <Calendar className="w-4 h-4" />
          </div>
          <span className="text-sm">{period}</span>
        </motion.div>
      </div>

      <div className="space-y-2 mb-6">
        {description.map((item, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="text-gray-300 text-sm leading-relaxed pl-4 border-l border-white/10 group-hover:border-white/20 transition-colors duration-300"
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
      </div>

      <div className="transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
        <SkillCard category="Skills" skills={skills} index={index} />
      </div>
    </motion.div>
  );
}
