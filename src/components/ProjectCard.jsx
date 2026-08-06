import {useState} from "react";
import ImageCarousel from "./ImageCarousel";
import VideoPlayer from "./VideoPlayer";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({
  title,
  thumbnail,
  description,
  type,
  media,
  startTime,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderMedia = (isExpanded = false) =>
    type === "video" ? (
      <VideoPlayer
        thumbnail={thumbnail}
        videoUrl={media}
        isExpanded={isExpanded}
        startTime={startTime}
      />
    ) : (
      <ImageCarousel images={media} isExpanded={isExpanded} />
    );

  return (
    <>
      <div
        id="project-card-container"
        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col aspect-[10/16] w-full max-w-[300px] mx-auto"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative group overflow-hidden flex-1">
          {/* flex-1 נותן לו לגדול לגובה הכרטיס */}
          {renderMedia(false)}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
            <div className="bg-white px-5 py-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-sm font-bold text-gray-900">
                View Project
              </span>
            </div>
          </div>
        </div>
        <div
          id="project-info"
          className="p-5 text-left bg-[F8F8F8] border-t border-gray-50"
        >
          <h3 className="text-lg font-bold text-[#2F2418] mb-1.5 truncate">
            {title}
          </h3>
          <p className="text-xs text-[#2F2418] line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div
          id="enlarged-media"
          className="w-full h-full flex items-center justify-center"
        >
          {renderMedia(true)}
        </div>
      </ProjectModal>
    </>
  );
};

export default ProjectCard;
