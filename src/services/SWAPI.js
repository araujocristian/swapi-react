import { useState } from "react";
import API from "./config/api";

export const useGetPlanet = () => {
  const [planet, setPlanet] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPlanet = async planetId => {
    setLoading(true);
    try {
      const response = await API.get(`/planets/${planetId}`);
      setPlanet(response.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return [{ planet, loading, error }, getPlanet];
};
