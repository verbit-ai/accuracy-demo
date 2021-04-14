import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 55px;
`;

export const Divider = styled.div`
  background-color: white;
  opacity: 0.2;
  width: 210px;
  height: 1px;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  width: 210px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  display: none;

  &:checked + span {
    display: inline-block;
    position: relative;
    left: -1px;
    width: 172px;
    height: 37px;
    border-radius: 30px;
    background-color: #00dab4;
    color: #0b2140;
    font-weight: 600;
    transition: ease background-color 400ms;
  }
`;

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0;
  width: 172px;
  height: 37px;
    transition: ease background-color 400ms;
`;

export const Label = styled.label`
  height: 37px;
  line-height: 37px;
  text-align: center;
  background-color: #56718f;
  color: #ffffff;
  border: 1px solid #00dab4;
  border-radius: 30px;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 1.1rem;
  user-select: none;
  cursor: pointer;
  transition: ease background-color 400ms;
  &:hover {
    filter: brightness(105%);
  }
`;
