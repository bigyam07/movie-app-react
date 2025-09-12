import { Outlet } from "react-router-dom"
import NavBar from "../component/navBar/NavBar"
const Rootlayout = () => {
  return (
    <>
      <div className="container">
        <NavBar />
        <Outlet />
      </div>
    </>
  )
}

export default Rootlayout
