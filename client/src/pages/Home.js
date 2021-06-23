import AuthService from '../services/auth.service'

import BlogInitialRender from '../components/BlogInitialRender'

import PostsList from '../components/posts/PostsList'

import Profiles from '../components/profiles/Profiles'

//style
import '../styles/home.scss'

const Home = () => {

    const currentUser = AuthService.getCurrentUser()


    if (!currentUser) return <BlogInitialRender />

    return (
        <div className='home-container'>
            <div className='side-menu-container'>
                <Profiles />
            </div>

            <div className='posts-container'>
                <PostsList />
            </div>
        </div>
    )
}

export default Home
