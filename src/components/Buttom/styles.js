import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  align-self: center;

  margin-top: 50px;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    filter: drop-shadow(2px 2px 10px #ffc500);
  }

  img {
    width: 150px;
  }

  p {
    font-family: "Exo 2", sans-serif;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 2.5em;
    color: #fff;
    letter-spacing: 2px;
    padding: 20px 0;
    box-shadow: 0 0.2em #000;
  }
`;
