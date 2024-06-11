import { Link } from "react-router-dom";

export default function MainButton() {
  return (
    <Link
      to="/contact"
      className="text-white bg-emerald-500 rounded-xl border-2 border-emerald-200 hover:scale-90 ease-in-out duration-300 flex flex-col content-end justify-center items-center px-6 py-2"
    >
      <p className="text-2xl">Free Quote</p>
      {/* <span className="font-semibold text-2xl mr-6">Free</span>
      <span className="ml-6 font-semibold text-2xl">Quote</span> */}
    </Link>
  );
}
