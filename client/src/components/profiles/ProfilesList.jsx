import { Link } from "react-router-dom"

const ProfilesList = ({ profiles }) => {
    return (
        <div>
            <p>Other Authors</p>
            {
                profiles.length === 0
                    ? <p>No Profiles To Show</p>
                    : profiles.map((profile, index) => {
                        return (
                            <Link key={index} to={`/profile?author=${profile}`} >
                                <p>{profile}</p>
                            </Link>
                        )
                    })
            }

        </div>
    )
}

export default ProfilesList
