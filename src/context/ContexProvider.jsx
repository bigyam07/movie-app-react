import { createContext, useState } from "react"

export const MovieContext = createContext();
const Contex = () => {
  const [movie, setMovie] = useState();
  return (
    <MovieContext.Provider value={{ movie, setMovie }}>

    </MovieContext.Provider>
  )
}

export default Contex
