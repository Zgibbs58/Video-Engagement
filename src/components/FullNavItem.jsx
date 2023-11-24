import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export default function FullNavItem({ name, path, index }) {
  const location = useLocation();
  return (
    <Link to={path} key={index} className={`group md:text-2xl font-semibold transition duration-300 mx-10`}>
      {name}
      <span
        className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-emerald-500 ${
          location.pathname === path ? "max-w-full w-full" : ""
        }`}
      ></span>
    </Link>
  );
}

FullNavItem.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  index: PropTypes.number,
};
