import { Link } from "react-router-dom"


const Post = ({ post }) => {
    return (
        <div>
            <h3>
                <Link to={`/post?title=${post.title}`}>{post.title}</Link>
            </h3>
            <p>{post.content}</p>
        </div>
    )
}

export default Post
