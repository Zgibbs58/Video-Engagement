import React, {useRef} from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import FullNavigation from "./FullNavigation";
import {Toggle} from "./Toggle";
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
        <nav className="md:hidden fixed top-8 right-8 text-right z-10">
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
                initial={{ x: 32, y: -350, opacity: 1 }}
                animate={{ x: 32, y: -80, opacity: 1, transition: { duration: 0.2 } }}
                exit={{ x: 32, y: -350, opacity: 1, transition: { duration: 0.2 } }}
              >
                <Navigation onClick={() => toggleNavbar()} />
              </motion.div>
            )}
          </AnimatePresence>
          </motion.nav>
        </nav>
        <nav className="hidden md:block">
          <FullNavigation />
        </nav>
      </>
    );
  }