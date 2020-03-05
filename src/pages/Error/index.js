import React from "react";
import BB8Icon from "../../assets/images/bb8-icon.png";
import { Container } from "./styles";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Container>
      <Link to="/">
        <img src={BB8Icon} alt="Logo Yoda" />
        <p>ERROR :(</p>
        <p>CLICK FOR RESTART</p>
      </Link>
    </Container>
  );
};

export default Error;
