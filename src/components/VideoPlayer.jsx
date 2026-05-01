const VideoPlayer = ({videoUrl}) => (
  <div
    id="video-player-wrapper"
    className="w-full aspect-video rounded-t-xl overflow-hidden bg-black"
  >
    <iframe
      className="w-full h-full"
      src={`${videoUrl}?rel=0&modestbranding=1`}
      title="Video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);

export default VideoPlayer;
