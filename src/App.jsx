import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Rootlayout from "./rootLayout/Rootlayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="favorite" element={<Favorite />} />
      </Route>
    ),
    { basename: "/movie-app-react/" }
  )
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default App
