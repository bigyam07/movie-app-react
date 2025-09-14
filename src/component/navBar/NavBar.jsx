import "../../css/NavBar.css"
import { NavLink, Link } from "react-router-dom"
import { useState, useContext } from "react";
import { MovieContext } from "../../context/ContexProvider";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const { setMovie, setCount } = useContext(MovieContext);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const API_KEY = import.meta.env.VITE_API_KEY;
  const fetchSearch = async (searchInput) => {
    if (searchInput.trim() == "") return;

    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchInput}`;
    const response = await fetch(URL);

    if (!response.ok) {
      console.log("Could not find the movie");
    }

    const data = await response.json();
    setMovie(data.results);
  }

  const handleKey = (e) => {
    if (e.key == "Enter") {
      fetchSearch(search);
    }
  }
  const handleSearchToggle = () => {
    if (!toggleSearch) {
      document.querySelector(".search-container").style.display = "block";
      setToggleSearch(true);
    } else {
      document.querySelector(".search-container").style.display = "none";
      setToggleSearch(false);
    }
  }
  const handleMenuToggle = () => {
    if (!toggleMenu) {
      document.querySelector(".nav-list").style.display = "block";
      setToggleMenu(true);
    } else {
      document.querySelector(".nav-list").style.display = "none";
      setToggleMenu(false);
    }
  }
  return (
    <div className="nav-bar">
      <div className="logo-container">
        <Link to="/"><h2 onClick={() => setCount((c) => c + 1)} className="logo">JustWatch</h2></Link>
      </div>

      <ul className="nav-list">
        <NavLink to="/"><li onClick={() => setCount((c) => c + 1)}>HOME</li></NavLink>
        <NavLink to="favorite"><li>FAVORITE</li></NavLink>
      </ul>

      <div className="search-container">
        <div className="search-section">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKey}
          />
          <div className="search-btn" onClick={() => fetchSearch(search)} >
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
      <div className="menu-box">
        <div className="search-box" onClick={handleSearchToggle}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <i className="fa-solid fa-bars menu-icon" onClick={handleMenuToggle}></i>
      </div>
    </div >
  )
}

export default NavBar
