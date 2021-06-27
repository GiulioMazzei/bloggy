import { Link } from "react-router-dom"

import avatar from '../../img/avatar.png'
import postCoverImg from '../../img/post-cover.webp'


const Post = ({ post }) => {

    let formattedDate = new Date(post.createdAt)
    const publishedData = formattedDate.toString().slice(4, 15)



    return (
        <div className='post-container'>

            <div className="img-box">
                <img src={postCoverImg} alt="" />
            </div>

            <div className='content-box'>

                <div className="author-box">
                    <Link className='link' to={`/profile?author=${post.author}`}>
                        <div className='box-1'>
                            <img src={avatar} alt="author" />
                            <p>{post.author}</p>
                        </div>
                    </Link>
                    <div className='box-2'>
                        <p>Published {publishedData}</p>
                    </div>
                </div>

                <div className="title-description-box">
                    <Link className='link' to={`/post?title=${post.title}`}>
                        <p className='post-title'>{post.title}</p>

                        <div className='content'>
                            <p>{post.content}</p>
                        </div>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Post
