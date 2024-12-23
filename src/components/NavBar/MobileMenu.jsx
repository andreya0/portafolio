import { Menu, X } from "lucide-react";

export default function MobileMenu({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative h-10 w-10 rounded-lg md:hidden focus:outline-none"
      aria-label="Toggle menu"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
          }`}
        >
          <Menu className="w-5 h-5 text-gray-400" />
        </div>
        <div
          className={`absolute transform transition-transform duration-300 ${
            isOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"
          }`}
        >
          <X className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </button>
  );
}
