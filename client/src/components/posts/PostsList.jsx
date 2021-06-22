import { useState, useEffect } from "react"


import PostService from '../../services/post.service'


import SearchBox from "./SearchBox"
import Post from './Post'
import PostsNotFound from "./PostsNotFound"


const PostsList = () => {


    const [posts, setPosts] = useState([])
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
        <div>

            <SearchBox
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
                onClick={findByTitle}
            />

            {
                posts.length === 0
                    ? <PostsNotFound />
                    : posts.map((post, index) => <Post key={index} post={post} />)
            }



        </div>
    )
}

export default PostsList
