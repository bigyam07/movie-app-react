import "../../css/card.css";

const Card = ({ movie, setMovie }) => {
  return (
    <div className="movie-card-container">
      {
        movie.map((movie) => {
          return (
            <>
              <div className="movie-card">
                <div className="fav-icon">
                  <i className="fa-solid fa-heart"></i>
                </div>
                <div className="movie-detail">
                  <h4>{movie.title}</h4>
                  <p>{movie.overview}</p>
                  <p><b>Release</b>: {movie.release_date}</p>
                </div>
                <img key={movie.id} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
              </div>
            </>
          )
        })
      }
    </div >
  )
}

export default Card
