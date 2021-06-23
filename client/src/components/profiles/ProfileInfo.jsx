import { Link } from 'react-router-dom'

import AuthorPostsList from '../posts/AuthorPostsList'

const ProfileInfo = ({ author, posts, onClick }) => {
    return (
        <div>

            <h1>PROFILE</h1>

            <p><strong>Author: </strong>{author}</p>

            <p>This author has published {posts.length} posts</p>
            <AuthorPostsList posts={posts} />

            <button onClick={onClick}><Link to='/home'>LOGOUT</Link></button>

        </div>
    )
}

export default ProfileInfo
