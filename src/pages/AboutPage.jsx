import React, { Suspense, lazy } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AboutSection from "../components/About/AboutSection";
import SkillCard from "../components/About/SkillAboutCard";
import { getSkills } from "../config/skills";

const EducationCard = lazy(() => import("../components/About/EducationCard"));

export default function AboutPage() {
  const { t } = useTranslation();
  const skills = getSkills(t);
  const education = [
    {
      degree: t("castro_carazo_degree"),
      institution: t("castro_carazo"),
      year: "2021 - 2024",
      description: t("castro_carazo_description"),
      skills: [
        { name: "HTML", iconName: "html" },
        { name: "CSS", iconName: "css" },
        { name: "JavaScript", iconName: "javascript" },
        { name: "Java", iconName: "java" },
        { name: "PHP", iconName: "php" },
        { name: "Oracle", iconName: "oracle" },
        { name: "C#", iconName: "csharp" },
        { name: "Bootstrap", iconName: "bootstrap" },
      ],
    },
  ];

  return (
    <AnimatePresence>
      <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-cover bg-black">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, filter: "blur(50px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                      url('https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 py-16">
          <motion.div
            className="max-w-4xl mx-auto bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {t("about")}
            </motion.h1>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <AboutSection
                title={t("background")}
                content={[t("about_1"), t("about_2")]}
                delay={0.4}
                direction="left"
              />

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {t("skills")}
                </h2>
                {skills.map((item, index) => (
                  <SkillCard
                    key={item.category}
                    category={item.category}
                    skills={item.skills}
                    index={index}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white mb-6">
                {t("education")}
              </h2>
              <Suspense
                fallback={
                  <div className="text-white">Loading education...</div>
                }
              >
                {education.map((edu, index) => (
                  <EducationCard
                    key={edu.degree}
                    education={edu}
                    index={index}
                  />
                ))}
              </Suspense>
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <p className="text-gray-300 italic">{t("steve_quote")}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
