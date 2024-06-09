import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://66656714d122c2868e408df2.mockapi.io/movies"
        );
        if (!response.ok) {
          throw new Error("Error al cargar los datos.");
        }
        const data = await response.json();
        setCargando(false);
        setMovies(data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="content__container">
      {cargando ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <div className="alert alert-success text-start" role="alert">
            <h4 className="alert-heading">Lista de Películas </h4>
            <hr />
            <p className="mb-0">
              Total películas encontradas: <strong>{movies.length}</strong>
            </p>
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

export default Movies;
