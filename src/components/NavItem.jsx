import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function NavItem({ name, path, index, onClick }) {
  return (
    <motion.li variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <div className="icon-placeholder" />
      <Link to={path} key={index} className="text-placeholder group md:text-2xl font-semibold transition duration-300" onClick={onClick}>
        {name}
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-emerald-500"></span>
      </Link>
    </motion.li>
  );
}

NavItem.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  index: PropTypes.number,
  onClick: PropTypes.func,
};
