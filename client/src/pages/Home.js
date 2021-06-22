import AuthService from '../services/auth.service'

import BlogInitialRender from '../components/BlogInitialRender'

import PostsList from '../components/posts/PostsList'

const Home = () => {

    const currentUser = AuthService.getCurrentUser()



    if (!currentUser) return <BlogInitialRender />

    return (
        <div>
            <h1>BLOGGY</h1>
            <p>Public Content</p>

            <PostsList />
        </div>
    )
}

export default Home
