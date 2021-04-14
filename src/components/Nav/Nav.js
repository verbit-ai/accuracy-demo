import { Container } from "./styled";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import SelectionMenu from "../SelectionMenu/SelectionMenu";

function Nav({ data, selected, setSelected, subtitles, setSubtitles, currentTime, setCurrentTime }) {
  return (
    <Container>
      <VideoPlayer subtitles={subtitles} setSubtitles={setSubtitles} currentTime={currentTime} setCurrentTime={setCurrentTime}/>
      <SelectionMenu data={data} selected={selected} setSelected={setSelected} setSubtitles={setSubtitles} subtitles={subtitles}/>
    </Container>
  );
}

export default Nav;
