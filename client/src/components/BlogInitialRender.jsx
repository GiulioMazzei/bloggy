import { Link } from 'react-router-dom'

import bgImg from '../img/bg-img.svg'

//style
import '../styles/blog-initial.scss'

const BlogInitialRender = () => {
    return (
        <div className='blog-initial-container'>

            <div className='img-box'><img src={bgImg} alt="dec-img" /></div>

            <h1>Welcome to Bloggy</h1>

            <div className="buttons-box">
                <Link className='link' to='/login'><button className='login'>Login</button></Link>
                <Link className='link' to='/register'><button className='register'>Register</button></Link>
            </div>

        </div>
    )
}

export default BlogInitialRender
