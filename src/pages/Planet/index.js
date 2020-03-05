import React, { useEffect, useState } from "react";
import { useGetPlanet } from "../../services/SWAPI";

import {
  Container,
  PlanetCard,
  PlanetCardTitle,
  PlanetCardDetails,
  Button,
  DetailsLine,
  PlanetCardFilm
} from "./styles";
import Loader from "../Loader";
import Error from "../Error";

const Planet = () => {
  const [{ planet, loading, error }, getPlanet] = useGetPlanet();
  const [nextPlanet, setNextPlanet] = useState(false);

  const onClick = () => {
    let planetId = Math.floor(Math.random() * 61 + 1);
    getPlanet(planetId);
  };

  useEffect(() => {
    onClick();
    setNextPlanet(false);
  }, [nextPlanet]);

  if (loading) return <Loader />;

  if (error) return <Error />;

  return (
    <Container>
      <PlanetCard>
        <PlanetCardTitle>
          <h2>PLANET</h2>
          <h1>{planet.name}</h1>
        </PlanetCardTitle>
        <PlanetCardDetails>
          <DetailsLine>
            <span>CLIMATE</span> <span>{planet.climate}</span>
          </DetailsLine>
          <DetailsLine>
            <span>GRAVITY</span> <span>{planet.gravity}</span>
          </DetailsLine>
          <DetailsLine>
            <span>POPULATION</span> <span>{planet.population}</span>{" "}
          </DetailsLine>
          <DetailsLine>
            <span>TERRAIN</span> <span>{planet.terrain}</span>
          </DetailsLine>
          <DetailsLine>
            <span>DIAMETER</span> <span>{planet.diameter}</span>
          </DetailsLine>
        </PlanetCardDetails>
        <PlanetCardFilm>FEATURED IN {planet.films.length} FILMS</PlanetCardFilm>
      </PlanetCard>
      <Button onClick={onClick}>
        <p>NEXT</p>
      </Button>
    </Container>
  );
};

export default Planet;
