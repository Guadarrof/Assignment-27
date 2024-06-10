import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom'

const API_URL = "https://66656714d122c2868e408df2.mockapi.io/movies";


const Home = () => {
  const [todayMovies, setTodayMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Error al cargar los datos.");
        }
        const data = await response.json();

        const uniqueMovies = Array.from(new Set(data.map(movie => movie.id)))
          .map(id => data.find(movie => movie.id === id));
        
          const selectedMovies = [];
        for (let i = 0; i < 3; i++) {
          if (uniqueMovies.length === 0) break;
          const randomIndex = Math.floor(Math.random() * uniqueMovies.length);
          selectedMovies.push(uniqueMovies.splice(randomIndex, 1)[0]);
        }

        setTodayMovies(selectedMovies);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='home'>
      <h1 className='home_title'>The movie library</h1>
      <div className='home_banner'>
        <h3 className='home_h3'>Destacadas del dia</h3>
        <div className='home_cards'>
        {todayMovies.map((movie) => (
          <Link  to={`/movieDetail/${movie.id}`} key={movie.id} className="home_movie-item">
            <img className='home_movie-poster' alt={movie.Title} src={movie.Poster}/>
            <h2 className='home_movie-title'>{movie.Title}</h2>
          </Link>
        ))}
        </div>
        <Link to="/movieCatalog" className='home_catalog'> Catalogo Completo</Link>
      </div>
    </div>
  )
}

export default Home