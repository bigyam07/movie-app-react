import "../css/card.css"
import { useContext } from "react"
import { MovieContext } from "../context/ContexProvider";

const Favorite = () => {
  const { favorite, setFavorite } = useContext(MovieContext);
  const handleRemoveFavorite = (index) => {
    setFavorite((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="movie-card-container favorite-container">
      {
        (favorite.length != 0) ? (
          favorite.map((movie, index) => {
            return (
              <div className="movie-card">
                <div className="fav-icon remove-icon" onClick={() => handleRemoveFavorite(index)}>
                  <i className="fa-solid fa-minus"></i>
                </div>
                <img
                  key={movie.id}
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.overview}
                />
              </div>
            )
          })
        ) : (
          <p className="fav-error"> No Favorite Saved</p>
        )
      }
    </div >
  )
}

export default Favorite
