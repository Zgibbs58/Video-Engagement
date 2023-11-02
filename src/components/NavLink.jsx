import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function NavLink({ linkName, linkPath }) {
  return (
    <Link to={linkPath} className="group md:text-2xl font-semibold transition duration-300 mx-2">
      {linkName}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-gray-500"></span>
    </Link>
  );
}

NavLink.propTypes = {
  linkName: PropTypes.string.isRequired,
  linkPath: PropTypes.string.isRequired,
};
