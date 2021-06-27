import { useState, useEffect } from 'react'

import NavBar from '../components/NavBar';

import verifyAuth from '../services/verify-auth.service';
import PostService from '../services/post.service'

import AddPostForm from '../components/forms/AddPostForm';
import UpdatePostForm from '../components/forms/UpdatePostForm'
import PostSubmitSuccess from '../components/posts/PostSubmitSuccess';


//style
import '../styles/addpost-page.scss'


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
    const [currentPost, setCurrentPost] = useState(initialPostState)

    const [submitted, setSubmitted] = useState(false)
    const [wantToUpdate, setWantToUpdate] = useState(false)
    
    
    useEffect(() => {
        if (props.location.search.includes('title')) setWantToUpdate(true)
        
        const postTitle = (props.location.search).slice(7).replace(/%20/g, ' ')
        findByTitle(postTitle);
        
    }, [wantToUpdate, props.location.search])



    //find-by-title functionality
    const findByTitle = (title) => {
        PostService.findByTitle(title)
            .then((res) => {
                setCurrentPost(res.data[0])
                console.log(res.data[0]);
            })
            .catch((err) => console.log(err))
    }



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
        PostService.update(currentPost.id, currentPost.title, currentPost.content, currentPost.category)
            .then((res) => {
                console.log(res.data)

                //redirect the user to the post page
                props.history.push(`/post?title=${currentPost.title}`);
                window.location.reload();
            })
            .catch((err) => console.log(err));
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
            {
                wantToUpdate 
                ? <UpdatePostForm 
                    currentPost={currentPost}
                    onChange={[
                        (e) => setCurrentPost({ ...currentPost, [e.target.name]: e.target.value }),
                        (e) => setCurrentPost({ ...currentPost, category: e.target.value })
                    ]}
                    onClick={updatePost}
                />
                : <AddPostForm 
                    post={post}
                    onChange={[
                        (e) => setPost({ ...post, [e.target.name]: e.target.value }),
                        (e) => setPost({ ...post, category: e.target.value })
                    ]}
                    onClick={savePost}
                />
            }
        </div>
    )
}

export default AddPost
