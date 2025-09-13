import "../../css/NavBar.css"
import { NavLink, Link } from "react-router-dom"
import { useState, useContext } from "react";
import { MovieContext } from "../../context/ContexProvider";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const { movie, setMovie } = useContext(MovieContext);

  const API_KEY = import.meta.env.VITE_API_KEY;
  const fetchSearch = async (searchInput) => {
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchInput}`;
    const response = await fetch(URL);
    if (!response.ok) {
      console.log("Could not find the movie");
    }
    const data = await response.json();
    console.log(data.results);
    setMovie(data.results);
  }

  return (
    <div className="nav-bar">
      <Link to="/"><h2 className="logo">JustWatch</h2></Link>

      <ul className="nav-list">
        <NavLink to="/"><li>HOME</li></NavLink>
        <NavLink to="/favorite"><li>FAVORITE</li></NavLink>
      </ul>

      <div className="search-container">
        <div className="search-section">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="search-btn" onClick={(e) => fetchSearch(search)} >
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
    </div >
  )
}

export default NavBar
