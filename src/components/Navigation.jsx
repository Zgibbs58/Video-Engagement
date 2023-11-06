import PropTypes from "prop-types";
import { motion } from "framer-motion";
import NavItem from "./NavItem";

const navLinks = [
  { name: "Home", path: "/", id: 0 },
  { name: "About", path: "/about", id: 1 },
  { name: "Portfolio", path: "/portfolio", id: 2 },
  { name: "Contact", path: "/contact", id: 3 },
];

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export default function Navigation({ onClick }) {
  return (
    <motion.ul variants={variants}>
      {navLinks.map((i) => (
        <NavItem name={i.name} path={i.path} key={i.id} onClick={onClick} />
      ))}
    </motion.ul>
  );
}

Navigation.propTypes = {
  onClick: PropTypes.func,
};
