import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import LetterPath from "./LetterPath";

export default function Portfolio() {
  const name = "Andrey Arroyo Gómez";
  const { t } = useTranslation();

  return (
    <div
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-cover bg-center bg-black"
      style={{
        backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
      }}
    >
      <div className="absolute top-4 right-4 z-10">
        <LanguageSwitcher />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="relative w-full h-[500px] flex flex-col justify-center items-center">
          <div className="relative w-4/5 md:w-4/5 lg:w-4/5 flex flex-col items-center">
            {/* Upper Line */}
            <motion.div
              className="absolute w-full h-1 bg-white"
              style={{ top: "50%" }}
              initial={{ top: "50%" }}
              animate={{ top: "0%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            {/* Lower Line */}
            <motion.div
              className="absolute w-full h-1 bg-white"
              style={{ bottom: "50%" }}
              initial={{ bottom: "50%" }}
              animate={{ bottom: "0%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            {/* Left Top Line */}
            <motion.div
              className="absolute w-1 bg-white left-0"
              style={{
                top: "0",
                height: "5%",
                transformOrigin: "top",
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 2.5, opacity: 1 }}
              transition={{ duration: 1, delay: 1.7 }}
            />
            {/* Right Top Line */}
            <motion.div
              className="absolute w-1 bg-white right-0"
              style={{
                top: "0",
                height: "5%",
                transformOrigin: "top",
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 2.5, opacity: 1 }}
              transition={{ duration: 1, delay: 1.7 }}
            />
            {/* Bottom Left Line */}
            <motion.div
              className="absolute w-1 bg-white left-0"
              style={{
                bottom: "0",
                height: "5%",
                transformOrigin: "bottom",
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 2.5, opacity: 1 }}
              transition={{ duration: 1, delay: 1.7 }}
            />
            {/* Bottom Right Line */}
            <motion.div
              className="absolute w-1 bg-white right-0"
              style={{
                bottom: "0",
                height: "5%",
                transformOrigin: "bottom",
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 2.5, opacity: 1 }}
              transition={{ duration: 1, delay: 1.7 }}
            />
            {/* Middle Line */}
            <motion.div
              className="absolute w-1 bg-white right-0"
              style={{
                right: "50%",
                top: "-1%",
                height: "2%",
                transformOrigin: "bottom",
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 2.5, opacity: 1 }}
              transition={{ duration: 1, delay: 1.7 }}
            />

            {/* Profile Image */}
            <motion.div
              className="absolute z-10 mb-8"
              initial={{ y: -45 }}
              animate={{ y: -150 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <motion.img
                src="/placeholder.svg?height=150&width=150"
                alt="Profile image of [Your Name]"
                className="rounded-full w-32 h-32 mx-auto border-2 border-white"
                initial={{}}
                animate={{}}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 1.5,
                }}
              />
            </motion.div>
            {/* Name and Title */}
            <div className="flex flex-col items-center z-10 p-9">
              <div className="flex flex-wrap justify-center max-w-full">
                {name.split(" ").map((word, wordIndex) => (
                  <div key={`word-${wordIndex}`} className="flex mx-3">
                    {word.split("").map((char, charIndex) => (
                      <svg
                        key={`char-${wordIndex}-${charIndex}`}
                        width="30"
                        height="40"
                        viewBox="0 0 20 25"
                        preserveAspectRatio="xMidYMid meet"
                        className="w-8 h-8 sm:w-7 sm:h-10 md:w-7 md:h-12 lg:w-8 xl:w-10 lg:h-16 mx-0.5 my-1 sm:mx-0 sm:my-1 "
                      >
                        <LetterPath
                          char={char.toUpperCase()}
                          delay={charIndex * 0}
                        />
                      </svg>
                    ))}
                  </div>
                ))}
              </div>
              <motion.p
                className="text-xl md:text-2xl text-white"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 2.3,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                Guapo :v
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
