import { Link } from "react-router-dom";

export default function NavLink({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="relative whitespace-nowrap block py-2 px-4 text-gray-300 transition-colors duration-300 hover:text-cyan-300/80 md:px-2 group"
    >
      {children}
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-cyan-300 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  );
}
