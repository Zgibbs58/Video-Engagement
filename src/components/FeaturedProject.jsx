import MobileButton from "./MobileButton";
import MainBtn from "./MainBtn";
import SecondaryButton from "./SecondaryButton";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import MobileButtonSecondary from "./MobileButtonSecondary";

export default function FeaturedProject({ name, description, image, projectLink, id }) {
  return (
    <motion.section className="grid lg:grid-cols-3 lg:justify-items-end items-center mb-36 lg:mb-64">
      <motion.div className="lg:col-span-2 text-left">
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
      <motion.figure className="lg:grid-span-1 my-10 lg:my-0 rounded-3xl grid justify-items-center">
        <img className="rounded-3xl shadow-lg shadow-gray-700 border-4 border-gray-200 lg:w-56" src={image} alt={image} />
      </motion.figure>
      <motion.button className="block lg:hidden text-center">
        <MobileButton text="View Site" link={projectLink} />
      </motion.button>
      <motion.button className="block lg:hidden text-center mt-10">
        <MobileButtonSecondary text="Learn More" link={`/project/${id}`} />
      </motion.button>
    </motion.section>
  );
}

FeaturedProject.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  projectLink: PropTypes.string,
  isOdd: PropTypes.number,
};
