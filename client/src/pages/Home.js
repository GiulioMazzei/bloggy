import AuthService from '../services/auth.service'

import BlogInitialRender from '../components/BlogInitialRender'

import PostsList from '../components/posts/PostsList'

import Profiles from '../components/profiles/Profiles'

const Home = () => {

    const currentUser = AuthService.getCurrentUser()



    if (!currentUser) return <BlogInitialRender />

    return (
        <div>
            <h1>BLOGGY</h1>
            <p>Public Content</p>

            <Profiles />

            <PostsList />
        </div>
    )
}

export default Home
