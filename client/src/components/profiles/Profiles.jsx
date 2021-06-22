import { useState, useEffect } from 'react'

import AuthService from "../../services/auth.service"

import ProfilesList from './ProfilesList'


const Profiles = () => {

    const [profiles, setProfiles] = useState([])


    useEffect(() => {
        //when the page load retrieve all the posts
        retrieveProfiles()
    }, [])



    //retrieve all the posts
    const retrieveProfiles = () => {

        const currentUser = AuthService.getCurrentUser().username
        AuthService.getAllProfiles()
            .then((res) => {
                //remove the current user from the 'other authors' list
                res.data.splice(res.data.indexOf(currentUser), 1)
                setProfiles(res.data)
            })
            .catch((err) => console.log(err))

    }



    return (
        <div>
            <ProfilesList profiles={profiles} />
        </div>
    )
}

export default Profiles
