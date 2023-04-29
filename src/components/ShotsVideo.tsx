import YouTube from "react-youtube";
import { useSelector } from "react-redux";
import { Shot } from "../types/shots";
import { OptionType } from "../types/video";

const ShotsVideo = () => {
  const currentShot: Shot = useSelector((state: { shot: Shot }) => state.shot);
  const onPlayerReady = (event: {
    target: { pauseVideo: () => void };
  }): void => {
    event.target.pauseVideo();
  };
  const opts: OptionType = {
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="youtubeContainer relative mb-12 h-0 w-full overflow-hidden pb-[56.25%]">
      <YouTube
        videoId={currentShot.videoID}
        opts={opts}
        onReady={onPlayerReady}
      />
    </div>
  );
};

export default ShotsVideo;
