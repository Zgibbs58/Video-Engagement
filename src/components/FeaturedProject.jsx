import MobileButtonSecondary from "./MobileButtonSecondary";
import MainBtn from "./MainBtn";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function FeaturedProject({ name, description, image }) {
  return (
    <section className="grid xl:grid-cols-3 xl:justify-items-end justify-items-center items-center mb-36 xl:mb-64">
      <div className="xl:col-span-2 text-left">
        <motion.h4
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-2xl xl:text-5xl font-bold mb-8"
        >
          {name}
        </motion.h4>
        <p>{description}</p>
        {/* <button className="mx-2 block xl:hidden text-center  mt-5 ml-0">
          <Link to={`/project/${id}`} className="border-2 border-gray-500 font-semibold px-2 py-1 rounded-md">
            Learn More
          </Link>
        </button> */}
        <button className="mt-10 hidden xl:inline mr-5">
          <MainBtn text="Portfolio" link={`/portfolio`} />
        </button>
      </div>
      <motion.figure className="xl:grid-span-1 my-10 xl:my-0 rounded-3xl grid justify-items-center">
        <div className="phone-frame">
          <div className="phone-frame-inner">
            <img src={image} alt={name} />
          </div>
          <div className="volume-button-top"></div>
          <div className="volume-button-middle"></div>
          <div className="volume-button-bottom"></div>
          <div className="power-button"></div>
        </div>
      </motion.figure>
      <div className="flex flex-col justify-center w-[288px] xl:hidden text-center">
        <MobileButtonSecondary text="Portfolio" link="/portfolio" />
      </div>
    </section>
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
