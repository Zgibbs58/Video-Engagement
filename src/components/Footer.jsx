import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  return (
    <footer className="bg-gray-500 pt-2 text-gray-100 px-4 sm:px-8 pt-6">
      <div className="flex flex-row items-center justify-between">
        {/* <h3 className="text-2xl lg:text-4xl font-bold text-center mb-2">Let&#39;s Connect</h3> */}
        <nav>
          <ul className="flex flex-row items-center justify-center space-x-2 sm:space-x-4 pb-2 text-sm md:text-xl">
            <li className={`group transition duration-300 ${location.pathname === "/" ? "display: hidden" : ""}`}>
              <Link to="/">
                Home<span className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-emerald-500`}></span>
              </Link>
            </li>
            <li className={`group transition duration-300 ${location.pathname === "/about" ? "display: hidden" : ""}`}>
              <Link to="/about">
                About
                <span className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-emerald-500`}></span>
              </Link>
            </li>
            <li className={`group transition duration-300 ${location.pathname === "/portfolio" ? "display: hidden" : ""}`}>
              <Link to="/portfolio">
                Portfolio<span className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-emerald-500`}></span>
              </Link>
            </li>
            <li className={`group transition duration-300 ${location.pathname === "/contact" ? "display: hidden" : ""}`}>
              <Link to="/contact">
                Contact<span className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-emerald-500`}></span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-row items-center justify-center space-x-4 pb-2">
          <a href="https://github.com/Zgibbs58" target="_blank" rel="noreferrer">
            <img src="/icons/github.svg" alt="github logo" className="w-8 h-8 sm:w-12 sm:h-12 hover:scale-90 ease-in-out duration-150" />
          </a>
          <a href="https://linkedin.com/in/zacharywgibbs" target="_blank" rel="noreferrer">
            <img src="/icons/linkedin.svg" alt="linkedin logo" className="w-8 h-8 sm:w-12 sm:h-12 hover:scale-90 ease-in-out duration-150" />
          </a>
          <Link to="/contact">
            <img src="/icons/email.svg" alt="email logo" className="w-8 h-8 sm:w-10 sm:h-10 hover:scale-90 ease-in-out duration-150" />
          </Link>
        </div>
      </div>
      <p className="text-xs pb-2 text-center">Zach Gibbs &copy; 2024 All Rights Reserved.</p>
    </footer>
  );
}
