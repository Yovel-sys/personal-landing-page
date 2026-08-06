import {useState} from "react";

const ImageCarousel = ({images, isExpanded}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div
      className={`relative w-full group flex items-center justify-center ${isExpanded ? "h-auto max-h-[85vh]" : "h-full overflow-hidden"}`}
    >
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className={`w-full h-full duration-500 ${isExpanded ? "object-contain max-h-[85vh]" : "object-cover"}`}
      />

      {currentIndex > 0 && (
        <button
          onClick={prevSlide}
          className={`absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition z-10 ${isExpanded ? "text-4xl" : "hidden"}`}
        >
          &#10094;
        </button>
      )}

      {currentIndex < images.length - 1 && (
        <button
          onClick={nextSlide}
          className={`absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition z-10 ${isExpanded ? "text-4xl" : "hidden"}`}
        >
          &#10095;
        </button>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-1 z-10">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-colors ${i === currentIndex ? "bg-white" : "bg-white/50"} ${!isExpanded && "hidden"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
