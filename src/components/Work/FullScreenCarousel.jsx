import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function FullScreenCarousel({
  images,
  initialIndex,
  isOpen,
  onClose,
}) {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);
  const [direction, setDirection] = React.useState(0);

  React.useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex >= images.length) nextIndex = 0;
      if (nextIndex < 0) nextIndex = images.length - 1;
      return nextIndex;
    });
  };

  const handleKeyDown = React.useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    },
    [onClose]
  );

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={onClose}
          />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white/90 hover:bg-black/70 transition-colors duration-200 backdrop-blur-sm"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
            <div className="flex justify-between items-center w-full px-4 py-2 z-10">
              <button
                className="p-2 rounded-full bg-black/50 text-white/90 hover:bg-black/70 transition-colors duration-200 backdrop-blur-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  paginate(-1);
                }}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                className="p-2 rounded-full bg-black/50 text-white/90 hover:bg-black/70 transition-colors duration-200 backdrop-blur-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  paginate(1);
                }}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full h-full flex items-center justify-center p-4"
              >
                <div
                  className="max-h-[85vh] max-w-[95vw] relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={images[currentIndex]}
                    alt={`Full screen image ${currentIndex + 1}`}
                    className="max-h-[65vh] max-w-[95vw] object-contain"
                    onClick={onClose}
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-white scale-125"
                      : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
