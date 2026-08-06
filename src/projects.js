import ExampleSlide01 from "./assets/ExampleSlideShow01/ExampleSlide01.jpg";
import ExampleSlide02 from "./assets/ExampleSlideShow01/ExampleSlide02.jpg";
import ExampleSlide03 from "./assets/ExampleSlideShow01/ExampleSlide03.jpeg";
import Rick from "./assets/Rick.png";

export const projects = [
  {
    id: 1,
    title: "Example Carousel Project",
    type: "carousel",
    description: "a carousel project with multiple images",
    media: [ExampleSlide01, ExampleSlide02, ExampleSlide03],
  },
  {
    id: 2,
    title: "Example Video Project",
    type: "video",
    description:
      "Original design, framing, research, translation, and writing.",
    media: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=31YFplcftTS2fNT9",
    thumbnail: Rick,
  },
];
