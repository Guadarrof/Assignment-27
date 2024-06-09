import React, { useEffect, useState } from "react";
import SearchBar from "../components/Search";
import { Link } from "react-router-dom";

const API_URL="https://66656714d122c2868e408df2.mockapi.io/movies"

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [foundMovie, setFoundMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (search === "") {
        setFoundMovie([]);
        return;
      }
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Error al cargar los datos.");
        }
        const data = await response.json();
        const lowercaseSearch = search.toLowerCase();
        const filteredMovies = data.filter((movie) =>
          movie.Title.toLowerCase().includes(lowercaseSearch)
        );
        setFoundMovie(filteredMovies);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchData();
  }, [search]);

  return (
    <div className="navBar">
      <SearchBar action={(e) => setSearch(e.target.value)} />
      {search !== "" ? (
        foundMovie.length > 0 ? (
          foundMovie.map((movie) => (
            <div className="search_result" key={movie.id}>
              <Link className="nav-link" to={`/movieDetail/${movie.id}`}>{movie.Title}</Link>            
        </div>
          ))
        ) : (
          <p className="search-error">No se encontraron resultados</p>
        )
      ) : (
        <p className="search-error">Realiza una búsqueda</p>
      )}
    </div>
  );
};

export default Navbar;
