import { Link } from "react-router-dom"

import avatar from "../../img/avatar.png"

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
                    profiles.slice(0, 5).map((profile, index) => {
                        //show only 5 profiles
                        return (
                            <div key={index} className="profile-container">
                                <img src={avatar} alt="avatar" />
                                <Link to={`/profile?author=${profile}`} className='link' >
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
