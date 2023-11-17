import { useParams } from "react-router-dom";
import { projectData } from "../../utils/projectData";
import { useEffect } from "react";
import SecondaryButton from "../components/SecondaryButton";

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
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl font-bold">{project.name}</h3>
          <p className="text-left text-xl font-semi-bold underline underline-gray-500">Project Description</p>
          {project.fullDescription.map((paragraph) => (
            <p className="text-left mt-4" key={paragraph + 1}>
              {paragraph}
            </p>
          ))}
          <p className="text-left text-xl font-semi-bold mt-4 underline underline-gray-500">Technologies Used</p>
          <div className="mt-4 flex flex-wrap w-1/2">
            {project.technologies.map((tech) => (
              <span className="bg-gray-300 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2" key={[tech] + 1}>
                {tech}
              </span>
            ))}
          </div>
          <img className="mt-8 rounded-lg shadow-lg" src={project.image} alt={project.name} />
        </div>
      </div>
    </div>
  );
}
