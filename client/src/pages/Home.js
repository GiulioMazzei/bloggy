import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

import AuthService from '../services/auth.service'

import BlogInitialRender from '../components/BlogInitialRender'

import NavBar from '../components/NavBar'

import PostsList from '../components/posts/PostsList'

import Profiles from '../components/profiles/Profiles'

//style
import '../styles/home-page.scss'

const Home = () => {

    const currentUser = AuthService.getCurrentUser()

    const { is_empty } = useContext(GlobalContext)
    const [isEmpty, setIsEmpty] = is_empty


    if (!currentUser) return <BlogInitialRender />

    return (
        <div>
            <NavBar />
            <div className='home-container'>
                <div className='posts-container'>
                    <PostsList />
                </div>
                <div style={{ display: isEmpty && 'none' }} className='side-menu-container'>
                    <Profiles />
                </div>

            </div>
        </div>
    )
}

export default Home
