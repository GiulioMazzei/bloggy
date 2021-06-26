import { Link } from 'react-router-dom'

import AuthorPostsList from '../posts/AuthorPostsList'

import avatar from '../../img/avatar.png'

const ProfileInfo = ({ author, isAuthor, posts, onClick }) => {


    return (
        <div className='profile-page-container'>

            <div className="img-title-box">
                <div className="img-box">
                    <img src={avatar} alt="avt-1" width='100' />
                </div>

                <div className="title-and-button">
                    <h1 className='title'>{author}</h1>
                    {isAuthor && <button onClick={onClick}><Link className='link' to='/home'>Logout</Link></button >}
                </div>
            </div>

            <div className="published-posts">
                <p className='title'>User's Posts</p>
                <p className='description'>This author has published {posts.length} posts</p>
                <AuthorPostsList posts={posts} />
            </div>

            <div className="button-box">

            </div>

        </div >
    )
}

export default ProfileInfo
