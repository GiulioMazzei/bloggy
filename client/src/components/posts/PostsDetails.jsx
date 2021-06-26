import React from 'react'

const PostsDetails = ({ posts }) => {
    return (
        <div className='posts-details-container'>
            <p className='posts-num'>{posts.length} posts</p>
            <p className='active'>Newest</p>
        </div>
    )
}

export default PostsDetails
