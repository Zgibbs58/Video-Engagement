import { useParams } from "react-router-dom";
import { projectData } from "../../utils/projectData";
import { useEffect } from "react";
import SecondaryButton from "../components/SecondaryButton";
import { motion } from "framer-motion";

export default function IndividualProject() {
  console.log(projectData);
  const { projectId } = useParams();
  const projectIdNum = parseInt(projectId, 10);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const project = projectData.find((p) => p.id === projectIdNum);
  console.log(project);

  return (
    <div className="mx-8 mt-6 mb-24 lg:mx-32 overflow-x-hidden text-left">
      {/* <div className="mt-4 mb-4">
        <Link className="border-2 border-gray-500 font-semibold px-2 py-1 rounded-md" to="/portfolio">
          Back to Portfolio
        </Link>
      </div> */}
      <motion.h3
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="text-3xl lg:text-5xl font-bold text-left underline underline-offset-8 decoration-5 decoration-emerald-500 text-left mb-24 w-10/12"
      >
        {project.name}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="text-left text-2xl font-semi-bold underline underline-gray-500 mt-20"
      >
        Case Study
      </motion.p>
      {project.fullDescription.map((paragraph) => (
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="text-left mt-4"
          key={paragraph + 1}
        >
          {paragraph}
        </motion.p>
      ))}
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="text-left text-2xl font-semi-bold mt-10 underline underline-gray-500"
      >
        Technologies Used
      </motion.p>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="mt-4 mb-10 flex flex-wrap sm:w-1/2"
      >
        {project.technologies.map((tech) => (
          <span className="bg-gray-300 rounded-md px-3 py-1 text-md font-semibold text-gray-700 mr-2 mt-2" key={[tech] + 1}>
            {tech}
          </span>
        ))}
      </motion.div>
      {/* <img className="mt-8 rounded-lg shadow-lg" src={project.image} alt={project.name} /> */}
      {/* <motion.button
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="my-10 mr-1 xs:mr-3"
      >
        <MainBtn text="View Site" link={project.projectLink} />
      </motion.button> */}
      <motion.button
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="my-10 mr-1 xs:mr-3"
      >
        <a
          className="mt-8 px-3 xs:px-6 sm:px-8 py-2 text-xl font-bold text-gray-100 bg-gray-500 rounded-full hover:bg-gray-100 hover:text-gray-500 border-2 border-gray-500 dark:border-none ease-in-out duration-300"
          href={project.projectLink}
          target="_blank"
          rel="noreferrer"
        >
          View Site
        </a>
      </motion.button>
      {project.repoLink === "private" ? null : (
        <motion.button
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="my-10 sm:ml-3"
        >
          <SecondaryButton text="View Repo" link={project.repoLink} />
        </motion.button>
      )}
    </div>
  );
}
