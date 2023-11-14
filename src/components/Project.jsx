import MobileButton from "./MobileButton";
import SecondaryButton from "./SecondaryButton";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function Project({ name, description, image, projectLink, isOdd }) {
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
    <article className="grid lg:grid-cols-3 lg:justify-items-end items-center mx-10 lg:mx-32 my-20 lg:my-72">
      <div className="lg:col-span-2 text-left">
        <h2 className="text-3xl lg:text-5xl font-bold mb-8">{name}</h2>
        <p>{description}</p>
        <button className="mt-10 hidden lg:block">
          <SecondaryButton text="View Project" link={projectLink} />
        </button>
      </div>
      <figure className="lg:grid-span-1 my-10 lg:my-0 mx-10 lg:mx-0 rounded-3xl grid justify-items-center">
        <img className="rounded-3xl shadow-lg shadow-gray-700 border-4 border-gray-200 lg:w-56" src={image} alt="" />
      </figure>
      <button className="mx-2 block lg:hidden text-center">
        <MobileButton text="View Project" link={projectLink} />
      </button>
    </article>
  ) : (
    <article className="grid lg:grid-cols-3 lg:justify-items-start items-center mx-10 lg:mx-32 my-20 lg:my-72">
      <figure className="lg:grid-span-1 my-10 lg:my-0 mx-10 lg:mx-0 rounded-3xl">
        <img className="rounded-3xl shadow-lg shadow-gray-700 border-4 border-gray-200 lg:w-56" src={image} alt="" />
      </figure>
      <button className="mx-2 block lg:hidden text-center">
        <MobileButton text="View Project" link={projectLink} />
      </button>
      <div className="lg:col-span-2 text-left">
        <h2 className="text-3xl lg:text-5xl font-bold mb-8">{name}</h2>
        <p>{description}</p>
        <button className="mt-10 hidden lg:block">
          <SecondaryButton text="View Project" link={projectLink} />
        </button>
      </div>
    </article>
  );
}

Project.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  projectLink: PropTypes.string,
  isOdd: PropTypes.number,
};
