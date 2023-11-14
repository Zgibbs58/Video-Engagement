import Project from "../components/Project";

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
      <section className="my-28">
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
