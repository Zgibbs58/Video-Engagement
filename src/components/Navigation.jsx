import PropTypes from "prop-types";
import { motion } from "framer-motion";
import NavItem from "./NavItem";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export default function NavLink({ onClick }) {
  return (
    <motion.ul variants={variants}>
      {/* <Link to={linkPath} className="group md:text-2xl font-semibold transition duration-300" onClick={onClick}>
      {linkName}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-gray-500"></span>
    </Link> */}
      {navLinks.map((i) => (
        <NavItem name={i.name} path={i.path} key={i.index} onClick={onClick} />
      ))}
    </motion.ul>
  );
}

NavLink.propTypes = {
  onClick: PropTypes.func,
};
