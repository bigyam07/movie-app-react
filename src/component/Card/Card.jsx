import "../../css/card.css";

const Card = ({ movie, setMovie }) => {
  return (
    <div className="movie-card">
      {
        movie.map((item) => {
          return <img key={item.id} src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} />
        })
      }
    </div>
  )
}

export default Card
