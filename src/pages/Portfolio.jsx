import Project from "../components/Project";
import { motion } from "framer-motion";

const projects = [
  {
    name: "AstronoME",
    description:
      "React Application built for stargazers. Provides information about current moon phase, weather, and incoming asteroids. and it contains a fully functional forum for stargazers to connect and share what they see. Uses MongoDB and Mongoose for the database, GraphQL, and Node.js and Express.js for the server",
    image: "/images/AstronoME.gif",
    projectLink: "https://astronome-10022023-9058067b996b.herokuapp.com/",
  },
  {
    name: "Maintenance Manatee",
    description:
      "React Application built for stargazers. Provides information about current moon phase, weather, and incoming asteroids. and it contains a fully functional forum for stargazers to connect and share what they see. Uses MongoDB and Mongoose for the database, GraphQL, and Node.js and Express.js for the server",
    image: "/images/MaintenanceManatee.gif",
    projectLink: "https://maintenance-manatee-20230807-e071f072b462.herokuapp.com/",
  },
  {
    name: "Book Search Engine",
    description:
      "React Application built for stargazers. Provides information about current moon phase, weather, and incoming asteroids. and it contains a fully functional forum for stargazers to connect and share what they see. Uses MongoDB and Mongoose for the database, GraphQL, and Node.js and Express.js for the server",
    image: "/images/BookSearchEngine.gif",
    projectLink: "https://shrouded-beach-51381-8a380f4bede0.herokuapp.com/",
  },
];

const isOdd = (num) => num % 2;

export default function Portfolio() {
  return (
    <>
      <section className="mx-10 my-24 lg:mx-32">
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
        {projects.map((project, index) => (
          <Project
            name={project.name}
            description={project.description}
            image={project.image}
            projectLink={project.projectLink}
            isOdd={isOdd(index + 1)}
            key={index}
          />
        ))}
      </section>
    </>
  );
}
