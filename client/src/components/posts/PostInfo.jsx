import { Link } from 'react-router-dom'

import avatar from '../../img/avatar.png'


const PostInfo = ({ post, isAuthor, onClick }) => {
    return (
        <div className='post-page-container'>

            <h1 className='title'>{post.title}</h1>

            <div className="post-info">

                <Link className='link' to={`/profile?author=${post.author}`}>
                    <div className='author'>
                        <img src={avatar} alt="" />
                        <p>{post.author}</p>
                    </div>
                </Link>
                <p className='category'>{post.category}</p>
            </div>

            <div className="content">
                <p>{post.content}</p>
            </div>


            {isAuthor && (
                <div className="buttons-box">
                    <Link className='link' to={`/add/update?title=${post.title}`}>
                        <button className='btn-update'>Update Post</button>
                    </Link>
                    <button className='btn-delete' onClick={onClick} >Delete Post</button>
                </div>
            )}

        </div>
    )
}

export default PostInfo
