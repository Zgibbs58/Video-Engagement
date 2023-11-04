import React, {useRef} from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import FullNavigation from "./FullNavigation";
import {Toggle} from "./Toggle";
import headshot from '../assets/zach-headshot.jpg';
import { motion, useCycle } from "framer-motion"
import { useDimensions } from "../../utils/use-dimensions";
import "../App.css";

// const variants = {
//   open: { opacity: 1, x: 0, transition: { duration: 0.5 } },
//   closed: { opacity: 0, x: "100%", transition: { duration: 0.5 } },
// }

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      type: "spring",
      delay: 0.5,
      stiffness: 400,
      damping: 40
    }
  }
};

export default function Header() {

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const closeMenu = () => {
    if (isOpen) {
      toggleOpen();
    }
  };

    return (
      <>
        <nav className="mobileNav flex items-center justify-between py-2 sm:px-8 sm:px-12 sm:hidden">
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
            <motion.div className="background"variants={sidebar}>
              <Navigation onClick={closeMenu}/>
            </motion.div>
            <Toggle toggle={() => toggleOpen()} isOpen={isOpen} />
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