import { Link } from "react-router-dom"

const AuthorPost = ({ post }) => {
    return (
        <div>
            <Link to={`/post?title=${post.title}`}><p>{post.title}</p></Link>
        </div>
    )
}

export default AuthorPost
