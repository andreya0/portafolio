import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import LetterPath from "./LetterPath";
import GitHubIcon from "../../public/icons/github";
import LinkedInIcon from "../../public/icons/linkedln";
export default function Portfolio() {
  const name = "Andrey Arroyo Gómez";
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-cover bg-black">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, filter: "blur(50px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ delay: 1.1, duration: 0.5 }}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), 
                      url('/img/background-img.jpg?height=1080&width=1920')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="flex flex-col justify-center items-center">
        <div className="relative w-full h-[500px] flex flex-col justify-center items-center">
          <div className="relative w-4/5 max-w-[1200px] min-w-[300px] flex flex-col items-center ">
            {/* Linea arriba */}
            <motion.div
              className="absolute w-full h-1 bg-white"
              style={{ top: "50%" }}
              initial={{ top: "50%" }}
              animate={{ top: "0%" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            {/* Linea abajo */}
            <motion.div
              className="absolute w-full h-1 bg-white"
              style={{ bottom: "50%" }}
              initial={{ bottom: "50%" }}
              animate={{ bottom: "0%" }}
              transition={{ duration: 0.5, delay: 0.2 }}
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
              transition={{ duration: 0.5, delay: 0.7 }}
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
              transition={{ duration: 0.5, delay: 0.7 }}
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
              transition={{ duration: 0.5, delay: 0.7 }}
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
              transition={{ duration: 0.5, delay: 0.7 }}
            />
            {/* Linea del medio */}
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
              transition={{ duration: 0.5, delay: 0.7 }}
            />

            {/* Imagen */}
            <motion.div
              className="absolute z-10 mb-8 rounded-full w-32 h-32 mx-auto border-2 border-white"
              initial={{ y: -45 }}
              animate={{ y: -150 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.img
                src="/img/profile.jpg"
                alt="Andrey_Arroyo_Gomez_img"
                className="rounded-full w-full h-full mx-auto object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 1.3,
                  duration: 1.5,
                }}
              />
            </motion.div>
            {/* Nombre y titulo */}
            <motion.div
              className="flex flex-col items-center z-10 m-9 rounded"
              transition={{ duration: 0.6, delay: 2 }}
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
                className="text-xl md:text-2xl text-white"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 1.2,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                {t("title")}
              </motion.p>
            </motion.div>
          </div>
          {/* Botones */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 25 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <button className="px-6 py-2 text-white border-[1px]">
              Sobre mi
            </button>
            <button className="px-6 text-white border-[1px]">Sobre mi</button>
            <button className="px-6 text-white border-[1px]">Sobre mi</button>
          </motion.div>
        </div>
      </div>
      {/* LinkedIn and GitHub buttons */}
      <motion.div
        className="flex justify-center space-x-4 z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 100 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <button
          className="p-2 bg-white bg-opacity-60 rounded-full hover:bg-opacity-100 transition-colors duration-200"
          onClick={() =>
            window.open("https://www.linkedin.com/in/andreyarroyo/", "_blank")
          }
          aria-label="LinkedIn Profile"
        >
          <LinkedInIcon className="h-8 w-8 " />
        </button>
        <button
          className="p-2 bg-white bg-opacity-60 rounded-full hover:bg-opacity-100 transition-colors duration-200"
          onClick={() => window.open("https://github.com/andreya0", "_blank")}
          aria-label="GitHub Profile"
        >
          <GitHubIcon className="h-8 w-8" />
        </button>
      </motion.div>
    </div>
  );
}
