import { Link } from "react-router-dom"

const AuthorPost = ({ post }) => {

    return (
        <div className='author-post'>

            <Link className='link' to={`/post?title=${post.title}`}><p>{post.title}</p></Link>

        </div>
    )
}

export default AuthorPost
