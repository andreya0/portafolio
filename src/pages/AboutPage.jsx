import {
  Suspense,
  lazy,
  useRef,
  useMemo,
  memo,
  useState,
  useEffect,
} from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import AboutSection from "../components/About/AboutSection";
import SkillCard from "../components/About/SkillAboutCard";
import { getSkills } from "../data/skills";
import { getEducation } from "../data/educationdata";

const MemoizedAboutSection = memo(AboutSection);
const MemoizedSkillCard = memo(SkillCard);

const EducationCard = lazy(() => import("../components/About/EducationCard"));

const LoadingFallback = () => (
  <div className="text-white bg-black/20 rounded p-4 animate-pulse h-20">
    Cargando...
  </div>
);

export default function AboutPage() {
  const { t } = useTranslation();
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);

  const containerRef = useRef(null);

  const skills = useMemo(() => getSkills(t), [t]);
  const education = useMemo(() => getEducation(t), [t]);

  const isInView = useInView(containerRef, { once: true, amount: 0.05 });

  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=75&w=1920&h=1080";

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImageUrl;
    img.onload = () => setIsBackgroundLoaded(true);
  }, [backgroundImageUrl]);

  const fadeInVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }),
    []
  );

  const fadeInNoYVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }),
    []
  );

  return (
    <AnimatePresence>
      <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black pt-1">
        <motion.div
          className="absolute inset-0 bg-cover bg-center sm:bg-cover lg:bg-contain lg:bg-top"
          initial={{ opacity: 0, filter: "blur(50px)" }}
          animate={{ opacity: isBackgroundLoaded ? 1 : 0, filter: "blur(0px)" }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url('${backgroundImageUrl}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            willChange: "opacity, filter",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 py-16">
          {/* Sección Principal */}
          <motion.div
            className="max-w-4xl mx-auto bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-white/10"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
            style={{ willChange: "opacity, transform" }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"
              variants={fadeInNoYVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
              style={{ willChange: "opacity" }}
            >
              {t("about")}
            </motion.h1>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Sección de Background */}
              <MemoizedAboutSection
                title={t("background")}
                content={[t("about_1") || "...", t("about_2") || "...."]}
                delay={0.3}
                direction="left"
              />

              {/* Sección de Habilidades */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {t("skills")}
                </h2>
                {skills.map((item, index) => (
                  <MemoizedSkillCard
                    key={`skill-${item.category}`}
                    category={item.category}
                    skills={item.skills}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Separador */}
          <motion.div
            className="flex items-center justify-center"
            variants={fadeInNoYVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
            style={{ willChange: "opacity" }}
          >
            <div className="flex w-[1px] h-1 bg-gray-100/30 transform py-2" />
          </motion.div>

          {/* Sección de Educación */}
          <div ref={containerRef}>
            <motion.div
              className="flex items-center justify-center"
              variants={fadeInNoYVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ willChange: "opacity" }}
            >
              <div className="flex w-[1px] h-1 bg-gray-100/30 transform py-2" />
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-white/10"
              variants={fadeInVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ willChange: "opacity, transform" }}
            >
              <div className="space-y-6">
                <motion.h2
                  className="text-2xl font-semibold text-white mb-6"
                  variants={fadeInVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                  style={{ willChange: "opacity, transform" }}
                >
                  {t("education")}
                </motion.h2>

                <Suspense fallback={<LoadingFallback />}>
                  {education.map((edu, index) => (
                    <motion.div
                      key={`edu-${index}`}
                      variants={fadeInVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      transition={{
                        duration: 0.4,
                        delay: 0.1 + index * 0.1,
                        ease: "easeOut",
                      }}
                      style={{ willChange: "opacity, transform" }}
                    >
                      <EducationCard education={edu} index={index} />
                    </motion.div>
                  ))}
                </Suspense>
              </div>

              <motion.div
                className="mt-12 text-center"
                variants={fadeInNoYVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                style={{ willChange: "opacity" }}
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
