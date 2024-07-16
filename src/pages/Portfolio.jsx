import { useEffect } from "react";
import Project from "../components/Project";
import { motion } from "framer-motion";
import { projectData } from "../../utils/projectData";
import MetaSeoTags from "../components/MetaSeoTags";

const isOdd = (num) => num % 2;

export default function Portfolio() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MetaSeoTags
        title={"Web Development Portfolio | Zach Gibbs | Murfreesboro, TN"}
        description={"Explore the web development portfolio of Zach Gibbs. View examples of custom websites designed for businesses in Tennessee."}
        keywords={["web development portfolio", "custom websites", "web design", "web developer", "Murfreesboro", "Tennessee"]}
        canonicalUrl={"https://zacharywgibbs.com/portfolio"}
        ogTitle={"Web Development Portfolio | Zach Gibbs | Murfreesboro, TN"}
        ogDescription={"Explore the web development portfolio of Zach Gibbs. View examples of custom websites designed for businesses in Tennessee"}
        ogImg={"https://zacharywgibbs.com/images/ogPortfolioImg.png"}
        slug={"/portfolio"}
      />
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
