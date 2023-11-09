import SkillsCarousel from "../components/SkillsCarousel";
import Project from "../components/Project";

const projects = [
  {
    name: "AstronoME",
    description:
      "React Application built for stargazers. Provides information about current moon phase, weather, and incoming asteroids. and it contains a fully functional forum for stargazers to connect and share what they see. Uses MongoDB and Mongoose for the database, GraphQL, and Node.js and Express.js for the server",
    image: "/images/AstronoME.gif",
  },
  {
    name: "AstronoME",
    description:
      "React Application built for stargazers. Provides information about current moon phase, weather, and incoming asteroids. and it contains a fully functional forum for stargazers to connect and share what they see. Uses MongoDB and Mongoose for the database, GraphQL, and Node.js and Express.js for the server",
    image: "/images/AstronoME.gif",
  },
  {
    name: "AstronoME",
    description:
      "React Application built for stargazers. Provides information about current moon phase, weather, and incoming asteroids. and it contains a fully functional forum for stargazers to connect and share what they see. Uses MongoDB and Mongoose for the database, GraphQL, and Node.js and Express.js for the server",
    image: "/images/AstronoME.gif",
  },
];

export default function Portfolio() {
  return (
    <>
      <section>
        {projects.map((project, index) => (
          <Project name={project.name} description={project.description} image={project.image} key={index} />
        ))}
      </section>
    </>
  );
}
