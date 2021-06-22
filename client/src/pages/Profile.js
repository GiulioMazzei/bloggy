import {useState, useEffect} from 'react';


import verifyAuth from '../services/verify-auth.service';
import AuthService from '../services/auth.service';
import PostService from '../services/post.service'

import ProfileInfo from '../components/profiles/ProfileInfo';



const Profile = (props) => {

    const [posts, setPosts] = useState([])

    //redirect the user to the home page if it isn't logged in
    verifyAuth(props, '/home')

    //if it's logged in get the current user info from localStorage
    const currentUser = AuthService.getCurrentUser()


    useEffect(() => {
        PostService.findByAuthor(currentUser.username)
            .then((res) => setPosts(res.data))
            .catch((err) => console.log(err))
    }, [])




    return (
        <ProfileInfo 
            currentUser={currentUser}
            posts={posts}
            onClick={AuthService.logout}
        />
    )
}

export default Profile
