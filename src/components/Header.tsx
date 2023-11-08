import React, {useRef} from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import FullNavigation from "./FullNavigation";
import {Toggle} from "./Toggle";
import headshot from '../assets/zach-headshot.jpg';
import { motion, useCycle, AnimatePresence } from "framer-motion"
import { useDimensions } from "../../utils/use-dimensions";
import "../App.css";

// const variants = {
//   open: { opacity: 1, x: 0, transition: { duration: 0.5 } },
//   closed: { opacity: 0, x: "100%", transition: { duration: 0.5 } },
// }

export default function Header() {

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const toggleNavbar = () => {
    toggleOpen();
  };

    return (
      <>
        <nav className="py-1 sm:px-12 sm:hidden fixed top-0 text-left z-10 pl-5 pt-5">
          {/* <div className="hidden sm:flex">
              <Link to="/" onClick={closeMenu}>
                <img className="w-20 md:w-20 rounded-full hover:shadow-lg hover:shadow-gray-400 ease-in-out duration-500" src={headshot} alt="Zach's headshot" />
              </Link>
          </div> */}
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
          >
            <Toggle toggle={() => toggleNavbar()} isOpen={isOpen} />
            <AnimatePresence>
            {isOpen && (
              <motion.div
                key="navigation"
                initial={{ x:-20, y: -100, opacity: 0 }}
                animate={{ x: -20, y: -65, opacity: 1 }}
                exit={{ x: -20, y: -100, opacity: 0, transition: { duration: 0.3 } }}
              >
                <Navigation onClick={() => toggleNavbar()} />
              </motion.div>
            )}
          </AnimatePresence>
          </motion.nav>
          {/* <div className={`hidden text-gray-500 sm:flex sm:flex-row justify-center block mx-2`}>
            <Navigation />
          </div> */}
        </nav>
        <nav className="hidden sm:block">
          <FullNavigation />
        </nav>
      </>
    );
  }