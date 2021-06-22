import React from 'react'

const PostInfo = ({ post, isAuthor, onClick }) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <h3>Author: {post.author}</h3>
            <p>{post.content}</p>
            {isAuthor && <button onClick={onClick} >DELETE POST</button>}
        </div>
    )
}

export default PostInfo
