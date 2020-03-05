import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const PlanetCard = styled.div`
  font-family: "Exo 2";
  align-self: center;
  padding: 0px 10px;
  width: 90vw;
  margin: 20px;
  box-sizing: border-box;
  border-radius: 20px;
  box-shadow: 0px 5px 15px -6px rgba(0, 0, 0, 0.75);
  margin: 10px auto;
  background: rgba(5, 13, 25, 0.569);
  text-transform: uppercase;
  background: linear-gradient(-135deg, transparent, #060302 0);
  filter: drop-shadow(2px 2px 10px #ffc500);
  max-width: 450px;
`;

export const PlanetCardFilm = styled.div`
  color: #fff;
  font-weight: 600;
  padding-bottom: 15px;
`;

export const PlanetCardTitle = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffc500;
  text-shadow: 0px 2px 10px #ffc500;
  text-transform: uppercase;
  margin: 20px 25px 10px 25px;

  h2 {
    font-size: 1.5em;
    font-weight: 700;
    text-align: center;
  }
  h1 {
    font-weight: 900;
    margin: 10px 0px;
    letter-spacing: 5px;
    font-size: 3em;
    text-align: center;
  }
`;

export const PlanetCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-self: center;
  font-size: 0.9em;
  padding-bottom: 20px;
`;

export const DetailsLine = styled.div`
  display: flex;
  margin: 15px 10px;
  justify-content: space-between;
  padding: 0px;

  span {
    color: #ffc500;
    display: inline-block;

    &:nth-child(odd) {
      width: 150px;
      /* border-left: 2px solid #ffc500; */
      padding-left: 10px;
    }

    &:nth-child(even) {
      align-self: flex-end;
      color: #cdc5bd;
      text-align: right;
      width: 190px;
      /* border-right: 2px solid #cdc5bd; */
      padding-right: 10px;
    }
  }
`;

export const Button = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:active {
    animation: fadeOut 0.2s ease-in-out;
  }

  p {
    font-family: "Exo 2", sans-serif;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 2.5em;
    color: #fff;
    letter-spacing: 2px;
    padding: 20px 0 10px 0;
    box-shadow: 0 0.2em #000;
  }

  @keyframes fadeOut {
    100% {
      opacity: 0.9;
    }
    0% {
      opacity: 0.2;
    }
  }
`;
