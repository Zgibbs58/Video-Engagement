import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function MainBtn({ text, link }) {
  return (
    <Link
      to={link}
      className="mt-8 px-8 py-2 text-xl font-bold text-gray-100 bg-gray-500 rounded-full hover:bg-gray-100 hover:text-gray-500 border-2 border-gray-500 ease-in-out duration-300"
    >
      {text}
    </Link>
  );
}

MainBtn.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};
