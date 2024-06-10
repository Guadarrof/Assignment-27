import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const API_URL = "https://66656714d122c2868e408df2.mockapi.io/movies";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

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
        const filteredObjects = data.filter((obj) => obj.id === parseInt(id));
        setMovie(filteredObjects[0]);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="content__container">
      {!movie ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <div className="more_container">
            <h4 className="more_title">
              Película:{movie.Title}
            </h4>
            <hr/>
            <div className="more__content">
              <img src={movie.Poster} alt={movie.Title}  className="more__img"/>
                <div className="detail_group">
                  <p className="detail_title">Descripcion:</p>
                  <p className="detail_info"> {movie.Plot}</p>
                </div>
                <div className="detail_group">
                  <p className="detail_title">Año:</p>
                  <p className="detail_info">{movie.Year}</p>
                </div>
                <div className="detail_group">
                  <p className="detail_title">Duracion:</p>
                  <p className="detail_info">{movie.Runtime}</p>
                </div>
                <div className="detail_group">
                  <p className="detail_title">Actores:</p>
                  <p className="detail_info">{movie.Actors}</p>
                </div>
                <div className="detail_group">
                  <p className="detail_title">Directores:</p>
                  <p className="detail_info">{movie.Director}</p>
                </div>
                <div className="detail_group">
                  <p className="detail_title">Genero:</p>
                  <p className="detail_info">{movie.Genre}</p>
                </div>
                <Link className="btn-back" to={"/movieCatalog"}>
                Volver
              </Link>
            </div>
              
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
