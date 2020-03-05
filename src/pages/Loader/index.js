import React from "react";
import YodaIcon from "../../assets/images/yoda-icon.png";
import { Container } from "./styles";

const Loader = () => {
  return (
    <Container>
      <img src={YodaIcon} alt="Logo Yoda" />
      <p>May The Force Be With You...</p>
    </Container>
  );
};

export default Loader;
