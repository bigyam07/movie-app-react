import "../../css/NavBar.css"
const NavBar = () => {
  return (
    <div className="nav-bar">
      <h2 className="logo">JustWatch</h2>

      <ul className="nav-list">
        <li>HOME</li>
        <li>FAVOURITE</li>
      </ul>

      <div className="search-container">
        <div className="search-section">
          <input type="text" placeholder="Search" />
          <div className="search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
    </div >
  )
}

export default NavBar
