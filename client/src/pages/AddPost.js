import { useState } from 'react'


import verifyAuth from '../services/verify-auth.service';
import PostService from '../services/post.service'

import AddPostForm from '../components/forms/AddPostForm';
import PostSubmitSuccess from '../components/posts/PostSubmitSuccess';



const AddPost = (props) => {


    //redirect the user to the home page if it isn't logged in
    verifyAuth(props, '/home')

    const initialPostState = {
        id: null,
        author: JSON.parse(localStorage.getItem('user')).username,
        title: '',
        content: '',
    };

    const [post, setPost] = useState(initialPostState)
    const [submitted, setSubmitted] = useState(false)


    //save post functionality
    const savePost = () => {

        PostService.create(post.author, post.title, post.content)
            .then(response => {
                setPost({
                    id: response.data.id,
                    author: response.data.author,
                    title: response.data.title,
                    content: response.data.content,
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch((err) => console.log(err))

    };


    //new post functionality
    const newPost = () => {
        setPost(initialPostState);
        setSubmitted(false);
    };



    //if the post has been submitted
    if (submitted) return <PostSubmitSuccess onClick={newPost} /> 

    return (
        <AddPostForm 
            post={post}
            onChange={(e) => setPost({ ...post, [e.target.name]: e.target.value })}
            onClick={savePost}            
        />
    )
}

export default AddPost
