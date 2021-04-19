import styled, { keyframes } from "styled-components";
import { prop } from "styled-tools";

// const clipAnimation = keyframes`
// from {
// 		clip-path: inset(0 100% 0 0);
// 	}
// 	to {
// 		clip-path: inset(0 0 0 0);
// 	}
// `;

const fadeIn = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`;

export const Container = styled.div`
  background-color: white;
  width: 31%;
  min-width: 352px;
  min-height: 600px;
  max-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  text-align: left;
  overflow: hidden;
  height: 90vh;
  animation-name: ${fadeIn};
  animation-duration: 0.3s;
  animation-iteration-count: 1;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 80%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  overflow: hidden;
  margin-left: 6%;
`;

export const Title = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  color: #304571;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 15px;
`;

export const Separator = styled.div`
  width: 80%;
  height: 1px;
  background-color: #cfdbe6;
  position: ${prop("position", "unset")};
  top: ${prop("top", "unset")};
`;

export const Paragraph = styled.div`
  font-size: 1.3rem;
  line-height: 35px;
  color: #10264a;
  padding: ${prop("padding", "0")};
  overflow-y: scroll;
  overflow-x: auto;
  height: 100%;
  max-width: 400px;
`;

// export const Span = styled.span`
//   animation-name: ${clipAnimation};
//   animation-duration: 0.5s;
//   animation-iteration-count: 1;
// `;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const BottomBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  height: 65px;
  width: 80%;
  padding: 0 0 7% 0;
`;

export const Accuracy = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const Mistakes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const AccuracyNum = styled.span`
  color: #00856f;
  font-size: 2.3rem;
  line-height: 40px;
  font-weight: 600;
  line-height: 45px;
`;

export const MistakesNum = styled.span`
  color: #e3263c;
  font-size: 1.3rem;
  font-weight: 600;
  padding-left: 3px;
  line-height: 35px;
`;

export const Mistake = styled.span`
  background-color: rgb(255, 198, 198);
`;
