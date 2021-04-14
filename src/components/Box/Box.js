import {
  Container,
  Header,
  Title,
  Separator,
  TextContainer,
  Paragraph,
  BottomBox,
  Accuracy,
  AccuracyNum,
  Mistakes,
  MistakesNum,
  Mistake,
  Span,
  Footer,
} from "./styled";
import { useRef, useEffect } from "react";

function Box({ title, content, currentTime }) {
  let mistakesCount = 0;
  let wordsDisplayed = 1;
  const bottomRef = useRef();

  const calculateAccuracy = () => {
    let accuracy = 100;
    accuracy = Math.floor(
      ((wordsDisplayed - mistakesCount) / wordsDisplayed) * 100
    );
    return accuracy;
  };

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentTime]);

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Separator />
        <TextContainer>
          <Paragraph padding="20px">
            {content
              .filter((it) => it.time <= currentTime)
              .map(({ word, mistake, time }) => {
                wordsDisplayed++;
                if (mistake) mistakesCount++;
                return mistake ? (
                  <Span key={time}>
                    <Mistake>{word} </Mistake>
                  </Span>
                ) : (
                  <Span key={time}>{word} </Span>
                );
              })}
            <div ref={bottomRef}></div>
          </Paragraph>
        </TextContainer>
      </Header>
      <Footer>
        <Separator />
        <BottomBox>
          <Accuracy>
            <AccuracyNum>{calculateAccuracy()}%</AccuracyNum>
            <Paragraph padding="0 5px">Accuracy</Paragraph>
          </Accuracy>
          <Mistakes>
            <Paragraph>Mistakes: </Paragraph>
            <MistakesNum>{mistakesCount}</MistakesNum>
          </Mistakes>
        </BottomBox>
      </Footer>
    </Container>
  );
}

export default Box;
