import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="home_movie-item">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="home_movie-poster"
        />
        <h4 className="movie__card-title">{movie.Title} </h4>
        <Link className="more-link" to={`/movieDetail/${movie.id}`}>
          Ver más
        </Link>
    </div>
  );
};

export default MovieCard;
