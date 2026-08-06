import ProjectCard from "../components/ProjectCard";
import {projects} from "../projects";

const Projects = () => {
  return (
    <div id="projects-page" className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-[#2F2418] mb-8">My Projects</h2>
      <div
        id="projects-grid"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            media={project.media}
            type={project.type}
            startTime={project.startTime}
            thumbnail={project.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
