import AuthService from '../services/auth.service'

import BlogInitialRender from '../components/BlogInitialRender'

const Home = () => {

    const currentUser = AuthService.getCurrentUser()



    if (!currentUser) return <BlogInitialRender />

    return (
        <div>
            <h1>BLOGGY</h1>
            <p>Public Content</p>
        </div>
    )
}

export default Home
