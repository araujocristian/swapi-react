import React from "react";

import Logo from "../../assets/images/logo-large.png";
import { Container, Image } from "./styles";
import Buttom from "../../components/Buttom";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <Link to="/planet">
        <Image src={Logo} alt="Logo" />
        <Buttom text="Search for planets" />
      </Link>
    </Container>
  );
}
