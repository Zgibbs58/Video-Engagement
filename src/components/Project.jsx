import MobileButton from "./MobileButton";
import SecondaryButton from "./SecondaryButton";
import PropTypes from "prop-types";

export default function Project({ name, description, image }) {
  return (
    <article className="grid sm:grid-cols-3 sm:justify-items-end items-center mx-10 sm:mx-32 my-20 sm:my-72">
      <div className="sm:col-span-2 text-left">
        <h2 className="text-3xl sm:text-5xl font-bold mb-8">{name}</h2>
        <p>{description}</p>
        <button className="mt-10 hidden sm:block">
          <SecondaryButton text="View Project" />
        </button>
      </div>
      <figure className="sm:grid-span-1 my-10 sm:my-0 mx-10 sm:mx-0 rounded-3xl">
        <img className="rounded-3xl shadow-lg shadow-gray-700 border-4 border-gray-200 sm:w-56" src={image} alt="" />
      </figure>
      <button className="mx-2 block sm:hidden text-center">
        <MobileButton text="View Project" />
      </button>
    </article>
  );
}

Project.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};
