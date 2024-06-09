import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie__card">
      <div>
        <div style={{ overflow: "hidden", height: "200px" }}>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className="movie-info">
          <div className="movie__card-title">{movie.Title} </div>
          <p className="movie__card-desc">{movie.Plot}</p>
        </div>
      </div>
      <button type="button" className="btn btn-primary">
        <Link className="nav-link" to={`/movieDetail/${movie.id}`}>
          Ver más
        </Link>
      </button>
    </div>
  );
};

export default MovieCard;