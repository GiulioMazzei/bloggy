import { useState, useEffect } from "react"

import NavBar from "../components/NavBar"

import AuthService from "../services/auth.service"
import verifyAuth from "../services/verify-auth.service"
import PostService from "../services/post.service"

import PostInfo from "../components/posts/PostInfo"



const Post = (props) => {

    //redirect the user to the home page if it isn't logged in
    verifyAuth(props, '/home')

    const [post, setPost] = useState({})
    const [isAuthor, setIsAuthor] = useState(false)


    useEffect(() => {

        //get the title from the url
        const postTitle = (props.location.search).slice(7).replace(/%20/g, ' ')
        findByTitle(postTitle)

    }, [props.location.search])


    const findByTitle = (title) => {
        PostService.findByTitle(title)
            .then((res) => {
                setPost(res.data[0])
                if (AuthService.getCurrentUser().username === res.data[0].author) setIsAuthor(true)
            })
            .catch((err) => console.log(err))
    }

    const deletePost = () => {
        PostService.remove(post.id)
            .then((res) => props.history.push("/home"))
            .catch((err) => console.log(err))
    }


    return (

        <div>
            <NavBar />
            <PostInfo
                post={post}
                isAuthor={isAuthor}
                onClick={deletePost}
            />
        </div>

    )
}

export default Post
