import { useEffect, useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

import { Link } from "react-router-dom"

import avatar from "../../img/avatar.png"

const ProfilesList = ({ profiles }) => {

    const { is_empty } = useContext(GlobalContext)
    const [isEmpty, setIsEmpty] = is_empty

    useEffect(() => {
        setIsEmpty(profiles.length === 0)
    }, [profiles.length, setIsEmpty])


    return (
        <div className='profiles-container'>
            <div className='title'>
                <p>Other Authors</p>
            </div>

            {
                profiles.slice(0, 5).map((profile, index) => {
                    //show only 5 profiles
                    return (
                        <div key={index} className="profile-container">

                            <img src={avatar} alt="avatar" />

                            <Link className='link' to={`/profile?author=${profile}`}>
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
