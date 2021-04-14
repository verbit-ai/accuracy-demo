import { Container } from "./styled";
import Box from "../Box/Box";


function BoxesContainer({ selected, currentTime }) {
  return (
    <Container>
      {selected.length > 0 &&
        selected.map((item, index) => 
        <Box title={item.name} content={item.text} currentTime={currentTime} key={index} />)}
    </Container>
  );
}

export default BoxesContainer;
