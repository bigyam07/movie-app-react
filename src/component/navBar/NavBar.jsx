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
        <label>
          <input type="text" placeholder="Search" />
        </label>
      </div>
    </div >
  )
}

export default NavBar
