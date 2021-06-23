import { Link } from 'react-router-dom'

import AuthorPostsList from '../posts/AuthorPostsList'

import avatar from '../../img/avatar.png'

const ProfileInfo = ({ author, posts, onClick }) => {




    return (
        <div>

            <img src={avatar} alt="avt-1" width='100' />

            <p><strong>Author: </strong>{author}</p>

            <p>This author has published {posts.length} posts</p>
            <AuthorPostsList posts={posts} />

            <button onClick={onClick}><Link to='/home'>LOGOUT</Link></button >

        </div >
    )
}

export default ProfileInfo
