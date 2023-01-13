import React, { useEffect, useState } from "react";
import Portada from "./portada";
import "./peliculas.css";
import getMovies from "../server/getmovies";

const Peliculas = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const newmovies = await getMovies();
      setMovies(newmovies);
    }
    fetchMovies();
  }, []);

  return (
    <div className="peliculas-div">
      {movies.map((movie) => (
        <Portada titulo={movie.title} imagen={movie.posterUrl}></Portada>
      ))}
    </div>
  );
};

export default Peliculas;
