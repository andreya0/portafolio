import { useRef, useMemo, memo, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionTitle from "../components/Work/SectionTitle";
import ExperienceCard from "../components/Work/ExperienceCard";
import ProjectCard from "../components/Work/ProjectCard";
import { getWorkExperience, getProjects } from "../data/workdata";

const MemoizedExperienceCard = memo(ExperienceCard);
const MemoizedProjectCard = memo(ProjectCard);
const MemoizedSectionTitle = memo(SectionTitle);

function WorkPage() {
  const { t } = useTranslation();
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);

  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  const viewOptions = { once: true, amount: 0.05 };

  const experienceInView = useInView(experienceRef, viewOptions);
  const projectsInView = useInView(projectsRef, viewOptions);

  const workExperience = useMemo(() => getWorkExperience(t), [t]);
  const projects = useMemo(() => getProjects(t), [t]);

  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=75&w=1920&h=1080";

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImageUrl;
    img.onload = () => setIsBackgroundLoaded(true);
  }, [backgroundImageUrl]);

  const experienceVariants = useMemo(
    () => ({
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
    }),
    []
  );

  const projectVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }),
    []
  );

  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black pt-1">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url('${backgroundImageUrl}')`,
          willChange: "transform",
          opacity: isBackgroundLoaded ? 1 : 0,
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1, opacity: isBackgroundLoaded ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <div className="relative z-10 container mx-auto px-4 py-16 mt-5">
        {/* Sección de Experiencia Laboral */}
        <div ref={experienceRef} className="max-w-4xl mx-auto mb-16">
          <MemoizedSectionTitle>{t("work_experience")}</MemoizedSectionTitle>
          <div className="space-y-6">
            {workExperience.map((experience, index) => (
              <motion.div
                key={`exp-${index}`}
                initial="hidden"
                animate={experienceInView ? "visible" : "hidden"}
                variants={experienceVariants}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + index * 0.1,
                  ease: "easeOut",
                }}
                style={{ willChange: "opacity, transform" }}
              >
                <MemoizedExperienceCard {...experience} index={index} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sección de Proyectos Personales */}
        <div ref={projectsRef} className="max-w-4xl mx-auto">
          <MemoizedSectionTitle>{t("personal_projects")}</MemoizedSectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={`proj-${index}`}
                initial="hidden"
                animate={projectsInView ? "visible" : "hidden"}
                variants={projectVariants}
                transition={{
                  duration: 0.4,
                  delay: 0.4 + index * 0.1,
                  ease: "easeOut",
                }}
                style={{ willChange: "opacity, transform" }}
              >
                <MemoizedProjectCard {...project} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkPage;
