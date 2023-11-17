import PropTypes from "prop-types";
import { motion } from "framer-motion";
import NavItem from "./NavItem";

const navLinks = [
  { name: "Home", path: "/", id: 0 },
  { name: "About", path: "/about", id: 1 },
  { name: "Portfolio", path: "/portfolio", id: 2 },
  { name: "Contact", path: "/contact", id: 3 },
];

export default function Navigation({ onClick }) {
  return (
    <motion.ul className="bg-gray-500 w-screen h-72 text-gray-100 flex flex-col items-center rounded-lg shadow-xl">
      {navLinks.map((i) => (
        <NavItem name={i.name} path={i.path} key={i.id} onClick={onClick} />
      ))}
    </motion.ul>
  );
}

Navigation.propTypes = {
  onClick: PropTypes.func,
};
