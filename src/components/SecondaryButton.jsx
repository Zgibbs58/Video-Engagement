import PropTypes from "prop-types";
export default function SecondaryButton({ text, link }) {
  return (
    <a
      href={link}
      className="mt-8 px-8 py-2 text-xl font-bold text-gray-500 bg-gray-100 rounded-full hover:bg-gray-500 hover:text-white border-2 border-gray-500 ease-in-out duration-300"
    >
      {text}
    </a>
  );
}

SecondaryButton.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};
