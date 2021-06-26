import { Link } from "react-router-dom"

import AuthService from "../services/auth.service"

import logo from '../img/logo.png'

//style
import '../styles/navbar.scss'

const NavBar = () => {

    const currentUser = AuthService.getCurrentUser().username

    return (

        <div className='nav-bar-container'>

            <div className='title-img-container'>
                <img src={logo} alt="logo" />
                <p>Bloggy</p>
            </div>

            <div className="links-container">
                <div >
                    <Link className='link' to='/home'>
                        <p>Home</p>
                    </Link>
                </div>

                <div>
                    <Link className='link' to='/add'>
                        <p>Add Post</p>
                    </Link>
                </div>

                <div>
                    <Link className='link' to={`/profile?author=${currentUser}`}>
                        <p>Profile</p>
                    </Link>
                </div>
            </div>

        </div>

    )
}

export default NavBar
