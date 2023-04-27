import YouTube, { YouTubeProps } from "react-youtube";
import { useSelector } from "react-redux";
import { Shot } from "../types/shots";

const Video = () => {
  const currentShot: Shot = useSelector((state: { shot: Shot }) => state.shot);
  const onPlayerReady = (event: {
    target: { pauseVideo: () => void };
  }): void => {
    event.target.pauseVideo();
  };
  const opts: YouTubeProps["opts"] = {
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="youtubeContainer relative mb-12 h-0 w-full overflow-hidden pb-[56.25%]">
      <YouTube
        videoId={currentShot.videoID}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        opts={opts}
        onReady={onPlayerReady}
      />
    </div>
  );
};

export default Video;
