import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SkillCard from "./SkillCard";

export default function EducationCard({ education, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
      className="bg-black/25 rounded-lg p-6 hover:bg-black/50 transition-colors duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="p-2 bg-white/10 rounded-lg hidden sm:block">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white">
            {education.degree}
          </h3>
          <p className="text-gray-400 mt-1">{education.institution}</p>
          <p className="text-gray-500 text-sm mt-1">{education.year}</p>
          <p
            className="text-gray-300 mt-3"
            dangerouslySetInnerHTML={{ __html: education.description }}
          />
          {education.skills && education.skills.length > 0 && (
            <SkillCard
              category="Skills"
              skills={education.skills}
              index={index}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}
