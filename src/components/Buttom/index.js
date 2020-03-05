import React from "react";

import { Container } from "./styles";
import DVIcon from "../../assets/images/dv-icon2.png";

const Buttom = ({ text }) => {
  return (
    <Container>
      <img src={DVIcon} alt="Yoda Icon" />
      <p>{text}</p>
    </Container>
  );
};

export default Buttom;
