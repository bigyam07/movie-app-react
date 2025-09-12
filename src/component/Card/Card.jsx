import "../../css/card.css";

const Card = ({ movie, setMovie }) => {
  return (
    <div className="movie-card-container">
      {
        movie.map((item) => {
          return (
            <>
              <div className="movie-card">
                <div className="fav-icon">

                </div>
                <img key={item.id} src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} />
              </div>
            </>
          )
        })
      }
    </div >
  )
}

export default Card
