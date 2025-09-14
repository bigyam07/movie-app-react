import { useContext } from "react";
import "../../css/card.css";
import { MovieContext } from "../../context/ContexProvider.jsx";
import { toast } from "react-toastify";

const Card = () => {
  const { movie, setFavorite } = useContext(MovieContext);

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
      toast.error("Trailer not available 😢");
    }
  }
  const handleFavIcon = (movie) => {
    setFavorite((prev) => {
      const alreadyFav = prev.some((favMovie) => favMovie.id === movie.id); // check by id

      if (alreadyFav) {
        toast.info("This movie is already in favorites ❤️");
        return prev;
      }

      toast.success("Saved to favorites ✅");
      return [...prev, movie];
    });
  };

  return (
    <div className="movie-card-container">
      {
        movie.map((movie) => {
          if (movie.poster_path != null) {
            return (
              <>
                <div className="movie-card">
                  <div className="fav-icon" onClick={() => handleFavIcon(movie)}>
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
