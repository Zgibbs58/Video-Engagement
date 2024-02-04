import MobileButton from "./MobileButton";
import MainBtn from "./MainBtn";
import SecondaryButton from "./SecondaryButton";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import MobileButtonSecondary from "./MobileButtonSecondary";

export default function Project({ name, description, image, projectLink, isOdd, id }) {
  // useState hook to determine if the screen is small
  // if the screen is small, the projects will alternate text left with image right and vice versa
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isOdd === 1 || isSmallScreen ? (
    <motion.section
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
      className="grid lg:grid-cols-3 lg:justify-items-end items-center mb-36 lg:mb-64"
    >
      <motion.div
        // initial={{ opacity: 0, x: 50 }}
        // whileInView={{ opacity: 1, x: 0 }}
        // transition={{ duration: 0.5 }}
        // viewport={{ once: true, amount: 0.3 }}
        className="lg:col-span-2 text-left"
      >
        <h2 className="text-2xl lg:text-5xl font-bold mb-8">{name}</h2>
        <p>{description}</p>
        {/* <button className="mx-2 block lg:hidden text-center  mt-5 ml-0">
          <Link to={`/project/${id}`} className="border-2 border-gray-500 font-semibold px-2 py-1 rounded-md">
            Learn More
          </Link>
        </button> */}
        <button className="mt-10 hidden lg:inline mr-5">
          <MainBtn text="Learn More" link={`/project/${id}`} />
        </button>
        <button className="mt-10 hidden lg:inline">
          <SecondaryButton text="View Site" link={projectLink} />
        </button>
      </motion.div>
      <motion.figure
        // initial={{ opacity: 0, x: 50 }}
        // whileInView={{ opacity: 1, x: 0 }}
        // transition={{ duration: 0.5 }}
        // viewport={{ once: true, amount: 0.3 }}
        className="lg:grid-span-1 my-10 lg:my-0 rounded-3xl grid justify-items-center"
      >
        <img className="rounded-3xl shadow-lg shadow-gray-700 border-4 border-gray-200 lg:w-56" src={image} alt={image} />
      </motion.figure>
      <motion.button
        // initial={{ opacity: 0, x: 50 }}
        // whileInView={{ opacity: 1, x: 0 }}
        // transition={{ duration: 0.5 }}
        // viewport={{ once: true, amount: 0.3 }}
        className="block lg:hidden text-center"
      >
        <MobileButton text="View Site" link={projectLink} />
      </motion.button>
      <motion.button
        // initial={{ opacity: 0, x: 50 }}
        // whileInView={{ opacity: 1, x: 0 }}
        // transition={{ duration: 0.5 }}
        // viewport={{ once: true, amount: 0.3 }}
        className="block lg:hidden text-center mt-10"
      >
        <MobileButtonSecondary text="Learn More" link={`/project/${id}`} />
      </motion.button>
    </motion.section>
  ) : (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className="grid lg:grid-cols-3 lg:justify-items-start items-center my-20 lg:my-52"
    >
      <motion.figure
        // initial={{ opacity: 0, x: -50 }}
        // whileInView={{ opacity: 1, x: 0 }}
        // transition={{ duration: 0.5 }}
        // viewport={{ once: true, amount: 0.3 }}
        className="lg:grid-span-1 my-10 lg:my-0 rounded-3xl"
      >
        <img className="rounded-3xl shadow-lg shadow-gray-700 border-4 border-gray-200 lg:w-56" src={image} alt={image} />
      </motion.figure>
      <motion.div
        // initial={{ opacity: 0, x: -50 }}
        // whileInView={{ opacity: 1, x: 0 }}
        // transition={{ duration: 0.5 }}
        // viewport={{ once: true, amount: 0.3 }}
        className="lg:col-span-2 text-left"
      >
        <h2 className="text-3xl lg:text-5xl font-bold mb-8">{name}</h2>
        <p>{description}</p>
        <button className="mt-10 hidden lg:inline mr-5">
          <MainBtn text="Learn More" link={`/project/${id}`} />
        </button>
        <button className="mt-10 hidden lg:inline">
          <SecondaryButton text="View Site" link={projectLink} />
        </button>
      </motion.div>
    </motion.section>
  );
}

Project.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  projectLink: PropTypes.string,
  isOdd: PropTypes.number,
};
