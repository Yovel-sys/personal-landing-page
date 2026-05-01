import ProjectCard from "../components/ProjectCard";
import exampleSlide01 from "../assets/ExampleSlideShow01/ExampleSlide01.jpg";
import exampleSlide02 from "../assets/ExampleSlideShow01/ExampleSlide02.jpg";
import exampleSlide03 from "../assets/ExampleSlideShow01/ExampleSlide03.jpeg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      type: "video",
      title: "Video Project",
      description: "A professional video",
      media: "https://www.youtube.com/embed/dQw4w9WgXcQ", // לינק לדוגמה
    },
    {
      id: 2,
      type: "carousel",
      title: "example project",
      description: "example insta presentation",
      media: [exampleSlide01, exampleSlide02, exampleSlide03],
    },
  ];
  return (
    <div id="projects-page" className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">My Projects</h2>
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
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
