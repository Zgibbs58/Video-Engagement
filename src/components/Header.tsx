import React, {useRef} from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import FullNavigation from "./FullNavigation";
import {Toggle} from "./Toggle";
import { motion, useCycle, AnimatePresence } from "framer-motion"
import { useDimensions } from "../../utils/use-dimensions";
import "../App.css";
import LogoMobile from "./LogoMobile";

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
        {/* <nav className="md:hidden fixed top-6 right-6 text-right z-10"> */}
        <div className={`lg:hidden flex justify-between items-center sticky top-0 py-2 px-6 z-20 bg-gray-100 dark:bg-slate-800 shadow-[0_10px_5px_-3px_rgba(0,0,0,0.3)] ${!isOpen ? "opacity-95" : "opacity-100"}`}>
          <LogoMobile />
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            className="fixed top-4 right-6 z-40"
          >
            <Toggle toggle={() => toggleNavbar()} isOpen={isOpen} />
            <AnimatePresence>
            {isOpen && (
              <motion.div
                key="navigation"
                initial={{ x: 24, y: -350, opacity: 1 }}
                animate={{ x: 24, y: -80, opacity: 1, transition: { duration: 0.2 } }}
                exit={{ x: 24, y: -350, opacity: 1, transition: { duration: 0.2 } }}
              >
                <Navigation onClick={() => toggleNavbar()} />
              </motion.div>
            )}
          </AnimatePresence>
          </motion.nav>
        </div>
        <nav className="hidden lg:block sticky top-0 z-20 py-2 bg-gray-100 dark:bg-slate-800 opacity-95 shadow-[0_10px_5px_-3px_rgba(0,0,0,0.3)]">
          <FullNavigation />
        </nav>
      </>
    );
  }