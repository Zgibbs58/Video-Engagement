import { useParams } from "react-router-dom";
import { projectData } from "../../utils/projectData";
import { useEffect } from "react";

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
          <h1 className="text-3xl font-bold text-gray-900">{project.name}</h1>
          <p className="mt-4 text-gray-500">{project.description}</p>
          <img className="mt-8 rounded-lg shadow-lg" src={project.image} alt={project.name} />
        </div>
      </div>
    </div>
  );
}
