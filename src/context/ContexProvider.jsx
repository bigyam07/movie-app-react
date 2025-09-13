import { createContext, useState } from "react"

export const MovieContext = createContext();
const ContexProvider = ({ children }) => {
  const [movie, setMovie] = useState(null);
  return (
    <MovieContext.Provider value={{ movie, setMovie }}>
      {children}
    </MovieContext.Provider>
  )
}

export default ContexProvider
