import exampleImage from "../assets/ExampleSlideShow01/ExampleSlide01.jpg";

const AboutMeImage = () => (
  <div id="aboutme-image-container" className="flex-1 flex justify-center">
    <div className="w-64 h-64 bg-gray-200 rounded-full overflow-hidden border-4 border-white shadow-lg">
      <img
        src={exampleImage}
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

export default AboutMeImage;
