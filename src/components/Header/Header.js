import { Container, Logo, Divider, Title } from "./styled";
import logo from "../../logo.svg";

function Header() {
  return (
    <Container>
      <Logo src={logo} alt="Logo" />
      <Divider />
      <Title>Live accuracy comparison demo</Title>
    </Container>
  );
}

export default Header;
