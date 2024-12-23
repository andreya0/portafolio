import React, { useState, useEffect } from "react";
import { Home } from "lucide-react";
import { useTranslation } from "react-i18next";

const NotFoundPage = () => {
  const [stars, setStars] = useState([]);
  const [asteroids, setAsteroids] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 150; i++) {
        newStars.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 7 + 1,
          opacity: Math.random(),
        });
      }
      setStars(newStars);
    };

    const generateAsteroids = () => {
      const newAsteroids = [];
      for (let i = 0; i < 10; i++) {
        newAsteroids.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 30 + 20,
          animationDuration: Math.random() * 3 + 2,
          rotate: Math.random() * 360,
        });
      }
      setAsteroids(newAsteroids);
    };

    generateStars();
    generateAsteroids();
    window.addEventListener("resize", generateStars);

    return () => window.removeEventListener("resize", generateStars);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-black text-white overflow-hidden">
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: "white",
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 2}px white`,
            transition: "opacity 0.5s ease-in-out",
          }}
        />
      ))}
      {asteroids.map((asteroid, index) => (
        <div
          key={index}
          className="absolute bg-gray-600 rounded-full"
          style={{
            left: `${asteroid.x}%`,
            top: `${asteroid.y}%`,
            width: `${asteroid.size}px`,
            height: `${asteroid.size}px`,
            backgroundImage: "radial-gradient(circle at 25% 25%, #555, #333)",
            borderRadius: "50%",
            transform: `rotate(${asteroid.rotate}deg)`,
            animation: `floating ${asteroid.animationDuration}s ease-in-out infinite`,
            opacity: 0.8,
          }}
        />
      ))}
      <style>
        {`
          @keyframes floating {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0);
            }
          }
        `}
      </style>
      <div
        className="absolute transition-all duration-300 ease-out"
        style={{
          left: `50%`,
          top: `50%`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="relative w-32 h-32 md:w-48 md:h-48 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-black to-gray-800 rounded-full animate-pulse" />
          <div className="absolute inset-2 bg-black rounded-full" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-black via-transparent to-black animate-spin" />
          <div className="absolute inset-1 bg-black rounded-full opacity-75" />
        </div>
      </div>
      <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-bounce">
        404
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-center px-4 z-10">
        {t("NotFound")}
      </p>
      <div className="flex space-x-4 z-10">
        <a
          href="/"
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
        >
          <Home className="w-5 h-5 mr-2" />
          {t("home")}
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
