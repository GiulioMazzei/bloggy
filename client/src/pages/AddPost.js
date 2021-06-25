import { useState, useEffect } from 'react'

import NavBar from '../components/NavBar';

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
        category: '',
    };

    const [post, setPost] = useState(initialPostState)
    const [submitted, setSubmitted] = useState(false)
    const [wantToUpdate, setWantToUpdate] = useState(false)


    useEffect(() => {
        if (props.location.search.includes('title')) setWantToUpdate(true)
        console.log('want to update: ', wantToUpdate);
    }, [wantToUpdate, props.location.search])


    //save post functionality
    const savePost = () => {

        PostService.create(post.author, post.title, post.content, post.category)
            .then(response => {
                setPost({
                    id: response.data.id,
                    author: response.data.author,
                    title: response.data.title,
                    content: response.data.content,
                    category: response.data.category,
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch((err) => console.log(err))


    };


    //update post functionality
    const updatePost = () => {

        const postTitle = (props.location.search).slice(7).replace(/%20/g, ' ')

        PostService.findByTitle(postTitle)
            .then((res) => {

                PostService.update(res.data[0].id, post.title, post.content, post.category)
                    .then((res) => {
                        //redirect the user to the post page
                        props.history.push(`/post?title=${post.title}`);
                        window.location.reload();
                    })
                    .catch((err) => console.log(err))

            })
            .catch((err) => console.log(err))


    }


    //new post functionality
    const newPost = () => {
        setPost(initialPostState);
        setSubmitted(false);
    };



    //if the post has been submitted
    if (submitted) return (
        <div>
            <NavBar />
            <PostSubmitSuccess onClick={newPost} />
        </div>
    ) 

    return (
        <div>
            <NavBar />
            <AddPostForm 
                post={post}
                onChange={(e) => setPost({ ...post, [e.target.name]: e.target.value })}
                onClick={wantToUpdate ? updatePost : savePost}
            />
        </div>
    )
}

export default AddPost
