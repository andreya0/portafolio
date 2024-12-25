import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import LetterPath from "../components/Main/LetterPath";
import GitHubIcon from "../../public/icons/github";
import LinkedInIcon from "../../public/icons/linkedln";
import ButtonMainPage from "../components/Main/ButtonMainPage";
import CV from "../../public/icons/cv";
import { Mail } from "lucide-react";
import i18next from "i18next";
export default function MainPage() {
  const name = "Andrey Arroyo Gómez";
  const { t } = useTranslation();
  const cvPath =
    i18next.language == "es"
      ? "/files/ANDREY-ARROYO-CV-ES.pdf"
      : "/files/ANDREY-ARROYO-CV-EN.pdf";

  return (
    <AnimatePresence>
      <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-cover bg-black">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, filter: "blur(50px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), 
                      url('/img/background-img.jpg?height=1080&width=1920')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="flex flex-col justify-center items-center">
          <div className="relative w-full h-[500px] min-h-[90vh] flex flex-col justify-center items-center">
            <div className="relative w-4/5 max-w-[1200px] min-w-[300px] flex flex-col items-center ">
              {/* Linea arriba */}
              <motion.div
                className="absolute w-full h-1 bg-white"
                style={{ top: "50%" }}
                initial={{ top: "50%" }}
                animate={{ top: "0%" }}
                transition={{ duration: 0.4, delay: 0.2 }}
              />
              {/* Linea abajo */}
              <motion.div
                className="absolute w-full h-1 bg-white"
                style={{ bottom: "50%" }}
                initial={{ bottom: "50%" }}
                animate={{ bottom: "0%" }}
                transition={{ duration: 0.4, delay: 0.2 }}
              />
              {/* Linea arriba izq */}
              <motion.div
                className="absolute w-1 bg-white left-0"
                style={{
                  top: "0",
                  height: "5%",
                  transformOrigin: "top",
                }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 2.5, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              />
              {/* Linea arriba derecha */}
              <motion.div
                className="absolute w-1 bg-white right-0"
                style={{
                  top: "0",
                  height: "5%",
                  transformOrigin: "top",
                }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 2.5, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              />
              {/* Linea abajo izq */}
              <motion.div
                className="absolute w-1 bg-white left-0"
                style={{
                  bottom: "0",
                  height: "5%",
                  transformOrigin: "bottom",
                }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 2.5, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              />
              {/* Linea abajo derecha */}
              <motion.div
                className="absolute w-1 bg-white right-0"
                style={{
                  bottom: "0",
                  height: "5%",
                  transformOrigin: "bottom",
                }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 2.5, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              />
              {/* Linea del medio arriba*/}
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
                transition={{ duration: 0.4, delay: 0.6 }}
              />
              {/* Linea del medio abajo*/}
              <motion.div
                className="absolute w-1 bg-white right-0"
                style={{
                  right: "50%",
                  bottom: "-1%",
                  height: "2%",
                  transformOrigin: "top",
                }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 2.5, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              />

              {/* Imagen */}
              <motion.div
                className="absolute z-10 mb-8 rounded-full w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-32 xl:h-32 mx-auto border-2 border-white"
                initial={{ y: -45 }}
                animate={{ y: "-120%" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.img
                  srcSet="/img/profile.jpeg?w=200&fm=webp 200w, /img/profile.jpeg?w=400&fm=webp 400w, /img/profile.jpeg?w=800&fm=webp 800w"
                  sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 800px"
                  src="/img/profile.jpeg?w=200&fm=webp"
                  alt="Andrey_Arroyo_Gomez_img"
                  rel="preload"
                  loading="lazy"
                  className="rounded-full w-full h-full mx-auto object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 0.8,
                    duration: 0.5,
                  }}
                />
              </motion.div>
              {/* Nombre y titulo */}
              <motion.div
                className="flex flex-col items-center z-10 m-9 rounded"
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                <div className="flex flex-wrap justify-center max-w-full ">
                  {name.split(" ").map((word, wordIndex) => (
                    <div key={`word-${wordIndex}`} className="flex mx-3 ">
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
                  className="text-lg md:text-xl lg:text-2xl text-white"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  {t("position")}
                </motion.p>
              </motion.div>
            </div>
            {/* Botones */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 25 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <ButtonMainPage text={t("about")} to="/about" />
              <ButtonMainPage text={t("work")} to="/work" />
              <ButtonMainPage text={t("contact")} to="/contact" />
            </motion.div>
          </div>
          {/* Socials */}
          <motion.div
            className="flex justify-center space-x-4 z-10"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <button
              className="p-2 bg-white bg-opacity-60 rounded-full hover:bg-opacity-100 transition-colors duration-200"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/andreyarroyo/",
                  "_blank"
                )
              }
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="h-8 w-8 xl:h-9 xl:w-9" />
            </button>
            <button
              className="p-2 bg-white bg-opacity-60 rounded-full hover:bg-opacity-100 transition-colors duration-200"
              onClick={() =>
                window.open("https://github.com/andreya0", "_blank")
              }
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="h-8 w-8 xl:h-9 xl:w-9" />
            </button>
            <div className="relative group">
              <button
                className="p-2 bg-white bg-opacity-60 rounded-full hover:bg-opacity-100 transition-colors duration-200 peer"
                onClick={() =>
                  (window.location.href = "mailto:andreyarroyo02@gmail.com")
                }
                aria-label="Email"
              >
                <Mail className="h-8 w-8 xl:h-9 xl:w-9" />
              </button>
              <span className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-max p-1 text-xs text-white bg-black/60 rounded opacity-0 transition-opacity duration-300 peer-hover:opacity-100 peer-hover:pointer-events-auto pointer-events-none">
                andreyarroyo02@gmail.com
              </span>
            </div>
            <div className="relative group">
              <button
                className="p-2 bg-white bg-opacity-60 rounded-full hover:bg-opacity-100 transition-colors duration-200 peer"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = cvPath;
                  link.download = cvPath.split("/").pop();
                  link.click();
                }}
                aria-label={t("cv")}
              >
                <CV className="h-8 w-8 xl:h-9 xl:w-9" />
              </button>
              <span
                className="text-center absolute left-1/2 transform -translate-x-1/2 -top-14 w-max p-[5px] text-xs text-white bg-black/60 rounded opacity-0 transition-opacity duration-300 peer-hover:opacity-100 peer-hover:pointer-events-auto pointer-events-none"
                dangerouslySetInnerHTML={{ __html: t("cv_explanation") }}
              ></span>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
