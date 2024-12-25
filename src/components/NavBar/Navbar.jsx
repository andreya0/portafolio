import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "./NavLink";
import LanguageSwitcher from "../Language/LanguageSwitcher";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { name: t("Home"), to: "/" },
    { name: t("about"), to: "/about" },
    { name: t("work"), to: "/work" },
    { name: t("contact"), to: "/contact" },
  ];
  const handleMenuItemClick = () => {
    setIsMenuOpen(!isMenuOpen);
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 backdrop-blur-md bg-black/80 border-b border-white/10">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex justify-start md:hidden">
            <MobileMenu
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>

          <div className="hidden md:flex-1 md:flex md:items-center md:justify-center">
            <ul className="flex space-x-8 text-center items-center">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "instant" })
                    }
                    to={item.to}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-end flex-1">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-white/10"
          >
            <ul className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink to={item.to} onClick={() => handleMenuItemClick()}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
