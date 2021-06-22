import { Link } from 'react-router-dom'

import AuthorPostsList from '../posts/AuthorPostsList'

const ProfileInfo = ({ currentUser, posts, onClick }) => {
    return (
        <div>

            <h1>PROFILE</h1>

            <p><strong>username:</strong> {currentUser.username}</p>

            <p><strong>email:</strong> {currentUser.email}</p>

            <AuthorPostsList posts={posts} />

            <button onClick={onClick}><Link to='/home'>LOGOUT</Link></button>

        </div>
    )
}

export default ProfileInfo
