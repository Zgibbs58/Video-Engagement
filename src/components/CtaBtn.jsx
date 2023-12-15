import { Link } from "react-router-dom";

export default function MainButton() {
  return (
    <Link
      to="/contact"
      className="relative w-28 h-28 text-white bg-emerald-500 rounded-full border-8 border-emerald-200 hover:rotate-3 hover:scale-90 ease-in-out duration-300 flex flex-col content-end justify-center"
    >
      <span className="font-bold text-xl mr-2">let&rsquo;s</span>
      <span className="ml-3 font-bold text-xl">talk</span>
    </Link>
  );
}
