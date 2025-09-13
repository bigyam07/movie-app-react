import { useContext, useState } from "react";
import "../../css/card.css";
import { MovieContext } from "../../context/ContexProvider.jsx";

const Card = () => {
  const { movie } = useContext(MovieContext);
  const [favorite, setFavorite] = useState([]);

  const API_KEY = import.meta.env.VITE_API_KEY;
  const fetchTrailer = async (id) => {
    const URL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
    const response = await fetch(URL);
    const data = await response.json();

    const trailer = data.results.find(
      (vid) => vid.type === "Trailer" && vid.site === "YouTube"
    );

    if (trailer) {
      window.open(`https://www.youtube.com/watch?v=${trailer.key}`, "_blank");
    } else {
      alert("Trailer not available 😢");
    }
  }
  const handleFavIcon = (id) => {
    setFavorite((prev) => {
      return prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id];
    })
  }

  return (
    <div className="movie-card-container">
      {
        movie.map((movie) => {
          if (movie.poster_path != null) {
            const isFav = favorite.includes(movie.id);
            return (
              <>
                <div className="movie-card">
                  <div className="fav-icon" onClick={() => handleFavIcon(movie.id)} style={{ color: isFav ? "red" : "white" }}>
                    <i className="fa-solid fa-heart"></i>
                  </div>
                  <div className="movie-detail">
                    <h4>{movie.title}</h4>
                    <p className="overview">{movie.overview}</p>
                    <p><b>Release</b>: {movie.release_date}</p>
                    <div className="learn-btn">
                      <button onClick={() => fetchTrailer(movie.id)}>Watch Trailer</button>
                    </div>
                  </div>
                  <img
                    key={movie.id}
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.overview}
                  />
                </div>
              </>
            )
          }
        })
      }
    </div >
  )
}

export default Card
