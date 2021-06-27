import { useState, createContext } from 'react'

export const GlobalContext = createContext()


export const GlobalState = ({ children }) => {

    const [posts, setPosts] = useState([])
    const [isEmpty, setIsEmpty] = useState(false)
    const [previousPost, setPreviousPost] = useState({})

    
    return (
        <GlobalContext.Provider 
            value={{
                posts_list: [posts, setPosts],
                is_empty: [isEmpty, setIsEmpty],
                previous_post: [previousPost, setPreviousPost],
            }}>
            {children}
        </GlobalContext.Provider>
    );

};
  