import { Link } from "react-router-dom"

import avatars from "../../img/avatars/avatars"

const ProfilesList = ({ profiles }) => {
    return (
        <div className='profiles-container'>
            <div className='box-name'>
                <p>Other Authors</p>
            </div>

            {
                profiles.length === 0
                    ? <p>No Profiles To Show</p>
                    :
                    profiles.map((profile, index) => {
                        return (
                            <div className="profile-container">
                                <img src={avatars.avatar1} alt="avatar" />
                                <Link key={index} to={`/profile?author=${profile}`} className='link' >
                                    <p>{profile}</p>
                                </Link>
                            </div>
                        )
                    })
            }

        </div >
    )
}

export default ProfilesList
