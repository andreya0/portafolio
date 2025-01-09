import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, Github, ExternalLink } from "lucide-react";
import SkillCard from "../About/SkillCard";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ProjectCard({
  title,
  description,
  skills,
  demo,
  image,
  index,
  githubLink,
  detailsLink,
  imagePosition = "center",
}) {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const descriptionRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    if (descriptionRef.current) {
      setIsOverflowing(descriptionRef.current.scrollHeight > 48);
    }
  }, [description]);

  const handleExpandClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const renderLink = () => {
    if (githubLink) {
      return (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white/10 text-white hover:bg-white/20 transition-colors duration-300 group/link"
        >
          <Github className="w-6 h-6 text-gray-300 transform group-hover/link:rotate-12 transition-transform duration-300" />
          <span className="font-medium">{t("codigo")}</span>
          <svg
            className="w-4 h-4 text-gray-300 transform group-hover/link:translate-x-1 transition-transform duration-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      );
    }

    if (detailsLink) {
      return (
        <a
          href={detailsLink}
          className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white/10 text-white hover:bg-white/20 transition-colors duration-300 group/link"
        >
          <ExternalLink className="w-6 h-6 text-gray-300 transform group-hover/link:rotate-12 transition-transform duration-300" />
          <span className="font-medium">{t("viewDetails")}</span>
          <svg
            className="w-4 h-4 text-gray-300 transform group-hover/link:translate-x-1 transition-transform duration-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      );
    }

    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-all flex flex-col"
    >
      {/* Image Container with Overlay */}
      <div className="relative h-48 flex-shrink-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover transform transition-transform duration-500 ease-out scale-100 group-hover:scale-105"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: imagePosition,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-1">
          <h3 className="text-xl font-semibold text-white mb-2 transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-4 flex flex-col min-h-[240px]">
        {/* Description */}
        <div className="relative mb-4 flex-shrink-0">
          <motion.div
            ref={descriptionRef}
            animate={{ height: isExpanded ? "auto" : "48px" }}
            transition={{ duration: 0.3 }}
            className="text-sm leading-relaxed text-gray-300 overflow-hidden"
          >
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </motion.div>

          <AnimatePresence>
            {isOverflowing && !isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-black/10 to-transparent"
              />
            )}
          </AnimatePresence>

          {isOverflowing && (
            <button
              onClick={handleExpandClick}
              className="mt-2 flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer z-10 relative"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  {t("showless")}
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  {t("showmore")}
                </>
              )}
            </button>
          )}
        </div>

        {/* Skills Container */}
        <div className="flex-grow">
          <div className="transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
            <SkillCard category="Skills" skills={skills} index={index} />
          </div>
        </div>

        {/* Links */}
        <div className="mt-4 flex-shrink-0">{renderLink()}</div>
      </div>
    </motion.div>
  );
}
