import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  justify-content: center;
  align-items: center;
  margin: auto 0;
  animation: fadeOut 2s ease-in-out infinite alternate;
  filter: drop-shadow(2px 2px 10px #ffc500);

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

  @keyframes fadeOut {
    0% {
      opacity: 0.9;
    }
    100% {
      opacity: 0.2;
    }
  }
`;
