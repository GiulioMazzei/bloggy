import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import AuthorPostsList from '../posts/AuthorPostsList'

import avatars from '../../img/avatars/avatars'

const ProfileInfo = ({ author, posts, onClick }) => {

    const [avatar, setAvatar] = useState()


    useEffect(() => {
        //decide which avatar to give to a user
        avatars.getAvatar(author, setAvatar, avatars)
    }, [author, avatar])


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
