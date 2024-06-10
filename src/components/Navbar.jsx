import React, { useEffect, useState, useRef } from "react";
import SearchBar from "../components/Search";
import { Link } from "react-router-dom";

const API_URL = "https://66656714d122c2868e408df2.mockapi.io/movies";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [foundMovie, setFoundMovie] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

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
        setShowDropdown(filteredMovies.length > 0);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchData();
  }, [search]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  return (
    <div className="navBar">
      <Link  to="/" className="navBar_logo">INDB</Link>
      <div className="searchbar">
        <SearchBar action={(e) => setSearch(e.target.value)} />
        {search !== "" && showDropdown ? (
          <div className="search_result" ref={dropdownRef}>
            {foundMovie.length > 0 ? (
              foundMovie.map((movie) => (
                <Link
                  key={movie.id}
                  className="search_result-item"
                  to={`/movieDetail/${movie.id}`}
                >
                  {movie.Title}
                </Link>
              ))
            ) : (
              <p className="search_result-error">
                No se encontraron resultados
              </p>
            )}
          </div>
        ): null}
      </div>
    </div>
  );
};

export default Navbar;
