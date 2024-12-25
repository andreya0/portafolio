import React, { Suspense, lazy, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import AboutSection from "../components/About/AboutSection";
import SkillCard from "../components/About/SkillAboutCard";
import { getSkills } from "../data/skills";
import { getEducation } from "../data/educationdata";

const EducationCard = lazy(() => import("../components/About/EducationCard"));

export default function AboutPage() {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const skills = getSkills(t);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const education = getEducation(t);

  return (
    <AnimatePresence>
      <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-cover bg-black pt-1">
        <motion.div
          className="absolute inset-0 bg-cover bg-center sm:bg-cover lg:bg-contain lg:bg-top"
          initial={{ opacity: 0, filter: "blur(50px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.6, duration: 0.5 }}
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
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {t("about")}
            </motion.h1>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <AboutSection
                title={t("background")}
                content={[t("about_1") || "...", t("about_2") || "...."]}
                delay={0.6}
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
          </motion.div>

          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <div className="flex w-[1px] h-1 bg-gray-100/30 transform py-2" />
          </motion.div>

          <div ref={containerRef}>
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="flex w-[1px] h-1 bg-gray-100/30 transform py-2" />
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6">
                <motion.h2
                  className="text-2xl font-semibold text-white mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {t("education")}
                </motion.h2>

                <Suspense fallback={<div className="text-white">...</div>}>
                  {education.map((edu, index) => (
                    <motion.div
                      key={edu.degree}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    >
                      <EducationCard education={edu} index={index} />
                    </motion.div>
                  ))}
                </Suspense>
              </div>

              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <p className="text-gray-300 italic">{t("steve_quote")}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
