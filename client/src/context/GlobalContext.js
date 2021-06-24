import { useState, createContext } from 'react'

export const GlobalContext = createContext()


export const GlobalState = ({ children }) => {

    const [posts, setPosts] = useState([])

    
    return <GlobalContext.Provider value={{posts_list: [posts, setPosts]}}>{children}</GlobalContext.Provider>;

};
  