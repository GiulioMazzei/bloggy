import {useState, useEffect} from 'react';


import verifyAuth from '../services/verify-auth.service';
import AuthService from '../services/auth.service';
import PostService from '../services/post.service'

import ProfileInfo from '../components/profiles/ProfileInfo';



const Profile = (props) => {

    const [posts, setPosts] = useState([])
    const [author, setAuthor] = useState('')

    //redirect the user to the home page if it isn't logged in
    verifyAuth(props, '/home')



    useEffect(() => {

        //take the author name from the url
        setAuthor((props.location.search).slice(8).replace(/%20/g, ' '))


        PostService.findByAuthor(author)
            .then((res) => setPosts(res.data))
            .catch((err) => console.log(err))

    }, [author])




    return (
        <ProfileInfo 
            author={author}
            posts={posts}
            onClick={AuthService.logout}
        />
    )
}

export default Profile
