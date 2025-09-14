import { createContext, useState } from "react"

export const MovieContext = createContext();
const ContexProvider = ({ children }) => {
  const [movie, setMovie] = useState(null);
  const [count, setCount] = useState(0); //To reset home depencency
  const [favorite, setFavorite] = useState([]);
  return (
    <MovieContext.Provider value={{ movie, setMovie, count, setCount, favorite, setFavorite }}>
      {children}
    </MovieContext.Provider>
  )
}

export default ContexProvider
