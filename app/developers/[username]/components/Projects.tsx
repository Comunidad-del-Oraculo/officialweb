import { FaLayerGroup } from "react-icons/fa6";

interface ProjectProps {
  name: string;
  description: string;
  technologies: string[];
  url: string;
}

const Projects = ({ projects }: { projects: ProjectProps[] }) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2 items-center">
        <FaLayerGroup />
        <h3 className="uppercase font-semibold">Projectos</h3>
      </div>
      <div className="flex flex-col gap-2 pl-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex flex-col gap-1 border-l border-s-accent/40 pl-2"
          >
            <h3 className="font-semibold">{project.name}</h3>
            <p>{project.description}</p>
            <div className="flex gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="text-xs bg-gray-200/70 border border-gray-200 rounded-lg px-2 py-0.5 font-light text-gray-500"
                >
                  {technology}
                </span>
              ))}
            </div>
            <a
              href={project.url}
              className="text-sm inline-flex w-fit mt-2 bg-accent/40 border border-accent/60 rounded-lg px-2 py-1 hover:scale-105 hover:bg-accent hover:text-white transition-all duration-300"
            >
              Ver proyecto
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
