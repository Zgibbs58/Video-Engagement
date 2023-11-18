import { useParams } from "react-router-dom";
import { projectData } from "../../utils/projectData";
import { useEffect } from "react";
import SecondaryButton from "../components/SecondaryButton";
import MobileButton from "../components/MobileButton";
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
    <div className="mx-auto py-6 px-6 lg:px-8 overflow-x-hidden">
      <motion.h3
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="text-4xl font-bold mb-20 underline underline-offset-8 decoration-4 decoration-emerald-500 text-left"
      >
        {project.name}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="text-left text-xl font-semi-bold underline underline-gray-500"
      >
        Project Description
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
      <p className="text-left text-xl font-semi-bold mt-4 underline underline-gray-500">Technologies Used</p>
      <div className="mt-4 flex flex-wrap sm:w-1/2">
        {project.technologies.map((tech) => (
          <span className="bg-gray-300 rounded-md px-3 py-1 text-md font-semibold text-gray-700 mr-2 mt-2" key={[tech] + 1}>
            {tech}
          </span>
        ))}
      </div>
      {/* <img className="mt-8 rounded-lg shadow-lg" src={project.image} alt={project.name} /> */}
      <button className="my-10 text-left">
        <MobileButton text="View Site" link={project.projectLink} />
      </button>
    </div>
  );
}
