import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function MainButton({ text }) {
  return (
    <Link
      to="/contact"
      className="text-white bg-emerald-500 rounded-xl hover:bg-emerald-700 ease-in-out duration-300 flex flex-col content-end justify-center items-center px-6 py-2"
    >
      <p className="text-3xl">{text}</p>
      {/* <span className="font-semibold text-2xl mr-6">Free</span>
      <span className="ml-6 font-semibold text-2xl">Quote</span> */}
    </Link>
  );
}

MainButton.propTypes = {
  text: PropTypes.string.isRequired,
};
