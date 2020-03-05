import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;

  justify-content: center;
  align-items: center;
  margin: auto 0;

  a {
    text-decoration: none;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin: auto 0;

    align-items: center;
  }

  img {
    width: 200px;
    margin-bottom: 20px;
  }

  p {
    font-family: "Exo 2";
    color: #fff;
    text-transform: uppercase;
    font-weight: 900;
    text-align: center;
    font-size: 2em;
    letter-spacing: 0.05em;
  }
`;
