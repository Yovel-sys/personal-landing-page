import {useState} from "react";

const ImageCarousel = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e) => {
    e.stopPropagation();
    // עוצר בתמונה האחרונה ולא חוזר ל-0
    setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    // עוצר בתמונה הראשונה ולא חוזר לאחרונה
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative w-full h-64 overflow-hidden group">
      {/* ... תצוגת התמונות ... */}

      {/* כפתור הקודם - נעלם כשמגיעים להתחלה */}
      {currentIndex > 0 && (
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        >
          &#10094;
        </button>
      )}

      {/* כפתור הבא - נעלם כשמגיעים לסוף */}
      {currentIndex < images.length - 1 && (
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        >
          &#10095;
        </button>
      )}
      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${i === currentIndex ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
