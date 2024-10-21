import React from "react";
import { Link } from "react-router-dom";

const ButtonMainPage = ({ text, to = "#", className = "" }) => {
  const buttonClass = `px-6 py-2 text-white border-[1px] hover:bg-white/10 hover:scale-105 backdrop-blur-lg ${className}`;

  return (
    <Link to={to} className={buttonClass} role={to ? "link" : "button"}>
      {text}
    </Link>
  );
};

export default ButtonMainPage;
