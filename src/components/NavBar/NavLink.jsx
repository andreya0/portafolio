import { Link } from "react-router-dom";

export default function NavLink({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="relative block py-2 px-4 text-gray-300 transition-colors duration-300 hover:text-cyan-400 md:px-2 group"
    >
      {children}
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-cyan-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  );
}
