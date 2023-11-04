import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function FullNavItem({ name, path, index }) {
  return (
    <Link to={path} key={index} className="group md:text-2xl font-semibold transition duration-300">
      {name}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-gray-500"></span>
    </Link>
  );
}

FullNavItem.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  index: PropTypes.number,
};
