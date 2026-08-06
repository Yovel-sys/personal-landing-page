import {useNavigate} from "react-router-dom";
const AboutMeContent = () => {
  const navigate = useNavigate();

  return (
    <div id="aboutme-text-content" className="flex-1 text-center md:text-left">
      <h1 className="text-4xl font-bold text-[#342412] mb-4">
        Pesonal Landing Page
      </h1>
      <p className="text-lg text-[#342412] mb-6">
        Built a sleek, fully responsive showcase platform designed to display
        diverse media formats, including videos, photo galleries, and embedded
        web projects.
      </p>
      <div className="m-3">
        <p>Key Features & Tech Highlights:</p>
        <ul className="list-disc pl-5 gap-4 flex flex-col">
          <li>
            Created modular, reusable React components for seamless media
            rendering and dynamic layouts.
          </li>

          <li>
            Implemented clean filtering and navigation to organize different
            project categories.
          </li>

          <li>
            Optimized video and image loading for smooth performance across all
            mobile and desktop devices.
          </li>
        </ul>
      </div>

      <button
        onClick={() => navigate("/projects")}
        className="bg-[#594E71] text-white px-6 py-2 rounded-lg hover:bg-[#8A7DA6] transition"
      >
        View My Work
      </button>
    </div>
  );
};

export default AboutMeContent;
