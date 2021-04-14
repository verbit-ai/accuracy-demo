import React, { Fragment, useState } from "react";
import GlobalStyle from "../../theme/globalStyle";
import { BodyContainer, Container } from "./styled";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import BoxesContainer from "../BoxesContainer/BoxesContainer";
import Data from "../data/data.json";

function App() {
  
  /** States **/
  // eslint-disable-next-line
  const [data, setData] = useState(Data);
  const [selected, setSelected] = useState([data[0], data[1], data[2]]);
  const [subtitles, setSubtitles] = useState([]);
  const [currentTime, setCurrentTime] = useState(0)

  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <Header />
          <BodyContainer>
            <Nav data={data} selected={selected} setSelected={setSelected} subtitles={subtitles} setSubtitles={setSubtitles} currentTime={currentTime} setCurrentTime={setCurrentTime}/>
            <BoxesContainer selected={selected} currentTime={currentTime}/>
          </BodyContainer>
      </Container>
    </Fragment>
  );
}

export default App;
