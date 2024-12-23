import { motion } from "framer-motion";

export default function SkillCard({ category, skills, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 + index * 0.15, duration: 0.5 }}
      className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors duration-300"
    >
      <h3 className="text-white font-medium mb-3">{category}</h3>
      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill, skillIndex) => {
          const Icon = skill.icon;
          return (
            <div key={skillIndex} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-300">
                <use href={`/icons/icon-sprite.svg#icon-${skill.icon}`} />
              </svg>
              <span className="text-gray-300 text-sm">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
