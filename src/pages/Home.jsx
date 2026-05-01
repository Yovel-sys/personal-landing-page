import AboutMeContent from "../components/AboutMeContent";
import AboutMeImage from "../components/AboutMeImage";
import SkillBadge from "../components/SkillBadge";

const Home = () => {
  const skills = ["React", "Tailwind CSS", "JavaScript", "Node.js", "Git"];

  return (
    <div
      id="home-page"
      className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
    >
      <section
        id="aboutme-section"
        className="flex flex-col md:flex-row items-center gap-12 mb-20"
      >
        <AboutMeContent />
        <AboutMeImage />
      </section>

      <section
        id="skills-section"
        className="border-t pt-12 text-center md:text-left"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Skills & Expertise
        </h2>
        <div
          id="skills-list"
          className="flex flex-wrap justify-center md:justify-start gap-3"
        >
          {skills.map((skill, index) => (
            <SkillBadge key={index} skill={skill} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
