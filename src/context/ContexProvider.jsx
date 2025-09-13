import { createContext, useState } from "react"

export const MovieContext = createContext();
const ContexProvider = ({ children }) => {
  const [movie, setMovie] = useState(null);
  const [count, setCount] = useState(0); //To reset home depencency
  return (
    <MovieContext.Provider value={{ movie, setMovie, count, setCount }}>
      {children}
    </MovieContext.Provider>
  )
}

export default ContexProvider
