import { useEffect, useContext } from "react";
import Card from "../component/Card/Card";
import { MovieContext } from "../context/ContexProvider";

const Home = () => {
  const { movie, setMovie } = useContext(MovieContext);

  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

  useEffect(() => {
    fetch(URL)
      .then(response => {
        if (!response.ok) {
          console.log("!!!..Could not Fetch Data..");
          return null;
        } else { return response.json(); }
      })
      .then(data => {
        console.log(data.results);
        setMovie(data.results);
      })
      .catch(error => {
        console.log("Error: ", error.message);
      })
  }, []);
  return (
    <>
      {
        (movie) ? (
          <Card />
        ) : (
          <p style={{ fontSize: "2rem" }}>Loading...</p>
        )
      }
    </>
  )
}

export default Home
