import { useState, useEffect, useContext } from "react"

import { GlobalContext } from "../../context/GlobalContext"

import PostService from '../../services/post.service'


import SearchBox from "./SearchBox"
import Post from './Post'
import PostsNotFound from "./PostsNotFound"
import PostsDetails from "./PostsDetails"
import Categories from '../Categories'


const PostsList = () => {


    const { posts_list } = useContext(GlobalContext)
    const [posts, setPosts] = posts_list
    const [searchTitle, setSearchTitle] = useState('');


    useEffect(() => {

        //when the page load retrieve all the posts
        retrievePosts()

    }, [])


    //retrieve all the posts
    const retrievePosts = () => {

        PostService.getAll()
            .then((res) => setPosts(res.data))
            .catch((err) => console.log(err))

    }

    //retrieve all the posts with a specific title
    const findByTitle = () => {

        PostService.findByTitle(searchTitle)
            .then((res) => setPosts(res.data))
            .catch((err) => console.log(err))

    }




    return (
        <div className='post-list-container'>

            <h1 className='title'>Search for Titles</h1>

            <SearchBox
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
                onClick={findByTitle}
            />

            <div className='separator'></div>

            <div className="posts-controllers">

                <PostsDetails posts={posts} />
                <Categories />

            </div>

            <div className='separator'></div>

            {
                posts.length === 0
                    ? <PostsNotFound />
                    : posts.map((post, index) => <Post key={index} post={post} />)
            }



        </div>
    )
}

export default PostsList
