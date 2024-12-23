import { Link } from "react-router-dom";

export default function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="relative block py-2 px-4 text-gray-300 transition-colors duration-300 hover:text-white md:px-2 md:hover:text-blue-400 group"
    >
      {children}
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  );
}
