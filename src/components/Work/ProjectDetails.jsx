import React, { useState } from "react";
import { ExternalLink, Calendar, Clock, Users } from "lucide-react";
import SkillCard from "../About/SkillCard";
import { motion } from "framer-motion";
import ImageCarousel from "./ImageCarousel";
import { useTranslation } from "react-i18next";
import FullScreenCarousel from "./FullScreenCarousel";

export default function ProjectDetails({
  title,
  description,
  images,
  liveDemo,
  features,
  technologies,
  duration,
  team,
  startDate,
  backgroundImg,
}) {
  const { t } = useTranslation();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsFullScreen(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-black">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${backgroundImg})`,
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <div className="relative z-10 flex-grow mt-32">
        <motion.div
          className="relative h-[20vh] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center px-4">
            <motion.h1
              className="text-5xl font-extrabold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 hover:from-white/80 hover:to-white/40 transition-all duration-500"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {title}
            </motion.h1>
            {liveDemo && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <a
                  href={liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 backdrop-blur-sm hover:scale-105 transform"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="font-medium">{t("demo")}</span>
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <motion.div
              className="lg:col-span-2 space-y-12 order-2 lg:order-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  {t("about_project")}
                </h2>
                <div
                  className="text-white/80 prose prose-invert max-w-none prose-p:text-white"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </section>

              {images && images.length > 0 && (
                <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    {t("project_gallery")}
                  </h2>
                  <ImageCarousel
                    images={images}
                    onImageClick={() => handleImageClick(currentImageIndex)}
                  />
                </section>
              )}

              {features && features.length > 0 && (
                <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    {t("key_features")}
                  </h2>
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-white/80 mt-2 flex-shrink-0" />
                        <p className="text-gray-300">{feature}</p>
                      </motion.li>
                    ))}
                  </ul>
                </section>
              )}
            </motion.div>

            <motion.div
              className="space-y-8 order-1 lg:order-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  {t("project_overview")}
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Calendar className="w-5 h-5 text-white/80" />
                    <span>
                      {t("started")}: {startDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Clock className="w-5 h-5 text-white/80" />
                    <span>
                      {" "}
                      {t("duration")}: {duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Users className="w-5 h-5 text-white/80" />
                    <span>
                      {t("team")}: {team}
                    </span>
                  </div>
                </div>
              </section>

              <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  {t("tech_stack")}
                </h2>
                <SkillCard category="Technologies" skills={technologies} />
              </section>
            </motion.div>
          </div>
        </div>
      </div>

      <FullScreenCarousel
        images={images}
        initialIndex={currentImageIndex}
        isOpen={isFullScreen}
        onClose={() => setIsFullScreen(false)}
      />
    </div>
  );
}
