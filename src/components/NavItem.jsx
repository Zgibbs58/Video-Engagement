import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

  return (
    <motion.li className="" variants={variants}>
      <Link to={path} key={index} className="text-2xl" onClick={onClick}>
        {name}
        <span
          className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-emerald-500 ${
            location.pathname === path && "max-w-full w-full"
          }`}
        ></span>
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
