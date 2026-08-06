import {useEffect, useRef} from "react";

const VideoPlayer = ({videoUrl, thumbnail, isExpanded, startTime = 0}) => {
  const videoRef = useRef(null);

  // פונקציית עזר לחילוץ ID של יוטיוב בצורה בטוחה
  const getYouTubeId = (url) => {
    if (!url || typeof url !== "string") return null;

    // תמיכה ב-Shorts
    if (url.includes("/shorts/")) {
      const parts = url.split("/shorts/");
      return parts[1] ? parts[1].split(/[?#&]/)[0] : null;
    }

    // תמיכה בלינקים רגילים
    const regExp =
      /^.*(youtube\.com\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const ytId = getYouTubeId(videoUrl);
  const isYouTube = Boolean(ytId);

  useEffect(() => {
    // לוגיקת הניגון האוטומטי רלוונטית רק לקבצים מקומיים
    if (isYouTube || !videoRef.current) return;

    const video = videoRef.current;

    if (isExpanded) {
      video.currentTime = startTime;
      video.muted = false;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => console.log("Autoplay blocked:", error));
      }
    } else {
      video.pause();
      video.currentTime = 0;
      video.muted = true;
    }
  }, [isExpanded, startTime, isYouTube]);

  return (
    <div
      id="outer-video-player-div"
      className={`relative flex items-center justify-center bg-black overflow-hidden transition-all duration-300
        ${
          isExpanded
            ? "h-[85vh] w-auto aspect-[9/16] mx-auto shadow-2xl rounded-xl"
            : "w-full h-full aspect-[9/16]"
        }`}
    >
      {isExpanded ? (
        isYouTube ? (
          /* נגן YouTube Shorts / Regular */
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${ytId}?autoplay=1&mute=0&rel=0&modestbranding=1&start=${startTime}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          /* נגן מקומי (MP4/WebM) */
          <video
            ref={videoRef}
            src={videoUrl}
            controls
            playsInline
            className="w-full h-full object-contain"
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        )
      ) : (
        /* תצוגה מקדימה בכרטיס */
        <div className="relative w-full h-full">
          <img
            src={thumbnail}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
          {/* אייקון Play קטן כדי שיבינו שזה וידאו */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
