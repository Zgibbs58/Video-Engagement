import { useEffect } from "react";
import Project from "../components/Project";
import { motion } from "framer-motion";
import { projectData } from "../../utils/projectData";
import { Helmet } from "react-helmet-async";

const isOdd = (num) => num % 2;

export default function Portfolio() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Zach Gibbs Web Development | Portfolio | Web Design</title>
      </Helmet>
      <section className="overflow-x-hidden">
        <div className="mx-8 lg:mx-32 mt-6 mb-24">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl lg:text-5xl font-bold text-left underline underline-offset-8 decoration-5 decoration-emerald-500 mb-24"
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
