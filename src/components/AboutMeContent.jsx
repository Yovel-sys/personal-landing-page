import {useNavigate} from "react-router-dom";
const AboutMeContent = () => {
  const navigate = useNavigate();

  return (
    <div id="aboutme-text-content" className="flex-1 text-center md:text-left">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Hi, I'm Yovel Amir
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Welcome to my personal space. I'm a professional dedicated to creating
        impactful solutions and sharing my journey through projects.
      </p>
      <button
        onClick={() => navigate("/projects")}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        View My Work
      </button>
    </div>
  );
};

export default AboutMeContent;
