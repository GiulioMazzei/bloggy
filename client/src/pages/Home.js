import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>BLOGGY</h1>
            <button><Link to='/login'>LOGIN</Link></button>
            <button><Link to='/register'>REGISTER</Link></button>
        </div>
    )
}

export default Home
