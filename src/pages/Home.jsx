import AboutMeContent from "../components/AboutMeContent";
import AboutMeImage from "../components/AboutMeImage";

const Home = () => {
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
    </div>
  );
};

export default Home;
