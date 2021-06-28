import {useState, useEffect} from 'react';

import NavBar from '../components/NavBar';

import verifyAuth from '../services/verify-auth.service';
import AuthService from '../services/auth.service';
import PostService from '../services/post.service'

import ProfileInfo from '../components/profiles/ProfileInfo';

//style
import '../styles/profile-page.scss'



const Profile = (props) => {

    
    //redirect the user to the home page if it isn't logged in
    verifyAuth(props, '/home')
    
    const [posts, setPosts] = useState([])
    const [author, setAuthor] = useState('')
    const [isAuthor, setIsAuthor] = useState(false)


    useEffect(() => {

        //take the author name from the url
        setAuthor((props.location.search).slice(8).replace(/%20/g, ' '))

        //find all the posts from this author
        PostService.findByAuthor(author)
            .then((res) => setPosts(res.data))
            .catch((err) => console.log(err))


        if (author === AuthService.getCurrentUser().username) setIsAuthor(true)

    }, [author, props.location.search])




    return (
        <div>

            <NavBar />

            <ProfileInfo 

                author={author}
                isAuthor={isAuthor}
                posts={posts}
                onClick={AuthService.logout}
                
            />

        </div>
    )
}

export default Profile
