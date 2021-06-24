import { Link } from 'react-router-dom'

const PostInfo = ({ post, isAuthor, onClick }) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <h3>Author: {post.author}</h3>
            <h3>Category: {post.category}</h3>
            <p>{post.content}</p>
            {isAuthor && <button><Link to={`/add/update?title=${post.title}`}>UPDATE POST</Link></button>}
            {isAuthor && <button onClick={onClick} >DELETE POST</button>}
        </div>
    )
}

export default PostInfo
