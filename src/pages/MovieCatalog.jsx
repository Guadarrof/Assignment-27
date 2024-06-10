import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const API_URL = "https://66656714d122c2868e408df2.mockapi.io/movies";

const MovieCatalog = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          API_URL
        );
        if (!response.ok) {
          throw new Error("Error al cargar los datos.");
        }
        const data = await response.json();
        const sortedMovies = data.sort((a, b) => {
          if (a.Title.toLowerCase() < b.Title.toLowerCase()) return -1;
          if (a.Title.toLowerCase() > b.Title.toLowerCase()) return 1;
          return 0;
        });
        setMovies(sortedMovies);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="catalog_container">
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <div className="content_header">
            <h3 className="header_h3">Nuestra seleccion</h3>
          </div>
          <div className="movie__list">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MovieCatalog;
