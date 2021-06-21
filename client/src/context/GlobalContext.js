import { createContext } from 'react'

export const GlobalContext = createContext()


export const GlobalState = ({ children }) => {
    
    return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;

};
  