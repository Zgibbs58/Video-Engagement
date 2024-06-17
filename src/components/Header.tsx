import React, {useRef} from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import FullNavigation from "./FullNavigation";
import {Toggle} from "./Toggle";
import { motion, useCycle, AnimatePresence } from "framer-motion"
import { useDimensions } from "../../utils/use-dimensions";
import "../App.css";
import LogoMobile from "./LogoMobile";
import CtaBtn from "./CtaBtn";

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
          <Link to={"/"}>
            <LogoMobile />
          </Link>
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            className="z-40"
          >
            <div className="flex gap-4">
              <Link
                to="/contact"
                className="text-white bg-emerald-500 rounded-xl hover:bg-emerald-700 ease-in-out duration-300 flex flex-col content-end justify-center items-center px-4 py-2"
              >
                <p className="text-xl">Free Quote</p>
              </Link>
              <Toggle toggle={() => toggleNavbar()} isOpen={isOpen} />
            </div>
            <AnimatePresence>
            {isOpen && (
              <motion.div
                key="navigation"
                initial={{ x: 24, y: -350, opacity: 1 }}
                animate={{ x: 24, y: -80, opacity: 1, transition: { duration: 0.2 } }}
                exit={{ x: 24, y: -350, opacity: 1, transition: { duration: 0.2 } }}
                className="fixed top-0 right-6 w-full h-full flex flex-col bg-primaryText shadow-md lg:hidden z-20 gap-6 items-start"
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