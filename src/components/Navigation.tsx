import React, {useRef} from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import {Toggle} from "./Toggle";
import headshot from '../assets/zach-headshot.jpg';
import { motion, useCycle } from "framer-motion"
import { useDimensions } from "../../utils/use-dimensions";
import "../App.css";

export default function Navigation() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);


    return (
      
      <nav className="">
        <div className="flex items-center justify-between py-2 sm:px-8 sm:px-12">
          <div>
              <Link to="/">
                <img className="w-20 md:w-20 rounded-full hover:shadow-lg hover:shadow-gray-400 ease-in-out duration-500" src={headshot} alt="Zach's headshot" />
              </Link>
          </div>
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            ref={containerRef}
          >
            <Toggle toggle={() => toggleOpen()} isOpen={isOpen} />
            <motion.div className={`absolute top-0 right-0 bg-gray-500 text-white w-full h-full rounded-md text-5xl ${isOpen ? 'flex flex-col justify-evenly' : 'hidden'}`}>
              <NavLink linkName={"Home"} linkPath={"/"} />
              <NavLink linkName={"About"} linkPath={"/about"} />
              <NavLink linkName={"Portfolio"} linkPath={"/projects"} />
              <NavLink linkName={"Contact"} linkPath={"/contact"} />
            </motion.div>
          </motion.nav>
          <div className={`hidden text-gray-500 sm:flex sm:flex-row justify-center block mx-2`}>
            <NavLink linkName={"Home"} linkPath={"/"} />
            <NavLink linkName={"About"} linkPath={"/about"} />
            <NavLink linkName={"Portfolio"} linkPath={"/projects"} />
            <NavLink linkName={"Contact"} linkPath={"/contact"} />
          </div>
        </div>
      </nav>
    );
  }