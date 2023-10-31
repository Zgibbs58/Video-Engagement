import React from "react";
import { Link } from "react-router-dom";
import headshot from '../assets/zach-headshot.jpg';
import {motion} from 'framer-motion';

export default function Navigation() {
    return (
      <nav className="">
        <div className="flex items-center justify-between py-2 sm:px-8 sm:px-12">
          <div className="flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ ease: "easeOut", duration: 1}}>
              <Link to="/">
                <img className="w-20 md:w-20 rounded-full" src={headshot} alt="" />
              </Link>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ ease: "easeOut", duration: 1 }} className="flex sm:flex-row justify-center sm:block mx-2">
            <Link to="/" className="group text-gray-500 md:text-2xl font-semibold transition duration-300">
                About
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-gray-500"></span>
            </Link>
          </motion.div>
        </div>
      </nav>
    );
  }