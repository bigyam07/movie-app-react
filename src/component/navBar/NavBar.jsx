import "../../css/NavBar.css"
import { NavLink, Link } from "react-router-dom"
import { useState } from "react";

const NavBar = () => {
  const [search, setSearch] = useState("");

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
          <div className="search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
    </div >
  )
}

export default NavBar
