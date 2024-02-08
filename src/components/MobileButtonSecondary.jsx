import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function MobileButton({ text, link }) {
  return (
    <Link
      to={link}
      className="mt-8 px-6 xs:px-18 py-2 text-xl font-bold text-gray-500 bg-gray-100 rounded-full hover:bg-gray-500 hover:text-white border-2 border-gray-500 dark:border-none ease-in-out duration-300"
    >
      {text}
    </Link>
  );
}

MobileButton.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};
