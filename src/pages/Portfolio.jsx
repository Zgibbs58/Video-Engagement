import Project from "../components/Project";
import { motion } from "framer-motion";
import { projectData } from "../../utils/projectData";

const isOdd = (num) => num % 2;

export default function Portfolio() {
  return (
    <>
      <section className="overflow-x-hidden">
        <div className="mx-10 my-24 lg:mx-32 ">
          <motion.h3
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl lg:text-5xl font-bold text-left underline underline-offset-8 decoration-4 decoration-emerald-500 text-left mb-36"
          >
            Portfolio
          </motion.h3>
          {/* <span className={"block w-full transition-all duration-500 h-1 bg-emerald-400"}></span> */}
          {projectData.map((project) => (
            <Project
              id={project.id}
              name={project.name}
              description={project.description}
              fullDescription={project.fullDescription}
              image={project.image}
              projectLink={project.projectLink}
              isOdd={isOdd(project.id)}
              key={project.id}
            />
          ))}
        </div>
      </section>
    </>
  );
}
