import YouTube from "react-youtube";
import { OptionType } from "../types/video";

interface VideoProps {
  videoID: string;
  autoplay: 0 | 1;
}
const Video = (props: VideoProps) => {
  const onPlayerReady = (event: {
    target: { pauseVideo: () => void };
  }): void => {
    event.target.pauseVideo();
  };
  const opts: OptionType = {
    playerVars: {
      autoplay: props.autoplay,
    },
  };
  return (
    <div className="youtubeContainer relative mb-12 h-0 w-full overflow-hidden pb-[56.25%]">
      <YouTube videoId={props.videoID} opts={opts} onReady={onPlayerReady} />
    </div>
  );
};

export default Video;
