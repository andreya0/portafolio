import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";
import SectionTitle from "../components/Work/SectionTitle";
import ExperienceCard from "../components/Work/ExperienceCard";
import ProjectCard from "../components/Work/ProjectCard";
import { getWorkExperience, getProjects } from "../data/workdata";

function WorkPage() {
  const { t } = useTranslation();
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceInView = useInView(experienceRef, {
    once: true,
    amount: 0.1,
  });
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.1 });

  const workExperience = getWorkExperience(t);
  const projects = getProjects(t);

  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-cover bg-black pt-1">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
            url('https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80')`,
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <div className="relative z-10 container mx-auto px-4 py-16 mt-5">
        <div ref={experienceRef} className="max-w-4xl mx-auto mb-16">
          <SectionTitle>{t("work_experience")}</SectionTitle>
          <div className="space-y-6">
            {workExperience.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={experienceInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <ExperienceCard {...experience} index={index} />
              </motion.div>
            ))}
          </div>
        </div>

        <div ref={projectsRef} className="max-w-4xl mx-auto">
          <SectionTitle>{t("personal_projects")}</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <ProjectCard {...project} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkPage;
