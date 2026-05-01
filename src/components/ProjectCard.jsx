import {useState} from "react";
import ImageCarousel from "./ImageCarousel";
import VideoPlayer from "./VideoPlayer";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({title, description, type, media}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderMedia = () =>
    type === "video" ? (
      <VideoPlayer videoUrl={media} />
    ) : (
      <ImageCarousel images={media} />
    );

  return (
    <>
      <div
        id="project-card-container"
        className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div
          id="project-media-preview"
          className="relative group overflow-hidden"
        >
          {renderMedia()}
          <div
            className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer z-20"
            onClick={(e) => {
              e.stopPropagation(); // מונע כפילות אירועים
              setIsModalOpen(true); // פותח את המודאל
            }}
          >
            <div className="bg-white/90 px-4 py-2 rounded-full shadow-md flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
              <span className="text-sm font-medium text-gray-800">
                Click to expand
              </span>
            </div>
          </div>
        </div>
        <div id="project-info" className="p-6 text-left">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>

      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div id="enlarged-media" className="shadow-2xl">
          {renderMedia()}
        </div>
      </ProjectModal>
    </>
  );
};

export default ProjectCard;
