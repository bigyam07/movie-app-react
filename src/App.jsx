import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import Rootlayout from "./rootLayout/Rootlayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="favourite" element={<Favourite />} />
      </Route>
    ),
    { basename: "/movie-app-react" }
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
