import { React, useRef, useState } from "react";
import ReactPlayer from "react-player";
import video from "../../Videos/Sample.mp4";
import { VideoContainer, PlayButton, ControlsWrapper, PrettoSlider, TimeElapsed } from "./styled";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import Thumbnail from "../../Videos/Thumbnail.png"


  /** Player Component **/

function VideoPlayer({ currentTime, setCurrentTime }) {

  const [state, setState] = useState({
    playing: false,
    played: 0,
    seeking: false,
  });

  // eslint-disable-next-line
  const [timeDisplayFormat, setTimeDisplayFormat] = useState("normal");

  const playerRef = useRef(null);

  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };

  // eslint-disable-next-line
  const { playing, played, seeking } = state;

  /** Formatting timing **/

  const format = (seconds) => {
    if (isNaN(seconds)) {
      return `0:00`;
    }
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = date.getUTCSeconds().toString().padStart(2, "0");
    if (hh) {
      return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
    }
    return `${mm}:${ss}`;
  };

  const handleProgress = (changeState) => {
    setCurrentTime(() => playerRef.current
      ? playerRef.current.getCurrentTime()
      : 0);
    if (!state.seeking) {
      setState({ ...state, ...changeState });
    }
  };

  const handleSeekChange = (e, newValue) => {
    setState({ ...state, played: parseFloat(newValue / 100) });
  };

  const handleSeekMouseDown = (e) => {
    setState({ ...state, seeking: true });
  };

  const handleSeekMouseUp = (e, newValue) => {
    setState({ ...state, seeking: false });
    playerRef.current.seekTo(newValue / 100);
  };

  const duration = playerRef.current
    ? playerRef.current.getDuration()
    : "00:00";

  const elapsedTime =
    timeDisplayFormat === "normal"
      ? format(currentTime)
      : `-${format(duration - currentTime)}`;
  const totalDuration = format(duration);

  return (
    <>
    <VideoContainer>
      <ReactPlayer
        url={video}
        width="100%"
        height="100%"
        playing={playing}
        onProgress={handleProgress}
        played={played}
        ref={playerRef}
        light={ Thumbnail }
        playIcon={ <PlayButton onClick={handlePlayPause}></PlayButton> }
        progressInterval={1000/60}
        />
        </VideoContainer>
      <PrettoSlider
        min={0}
        max={100}
        value={played * 100}
        onChange={handleSeekChange}
        onMouseDown={handleSeekMouseDown}
        onChangeCommitted={handleSeekMouseUp}
      />
      <ControlsWrapper>
        {!playing ? (
          <PlayArrowIcon onClick={handlePlayPause} />
        ) : (
          <PauseIcon onClick={handlePlayPause} />
        )}
        <TimeElapsed>{elapsedTime}/{totalDuration}</TimeElapsed>
      </ControlsWrapper>
    </>
  );
}

export default VideoPlayer;
