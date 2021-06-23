/* eslint-disable import/no-anonymous-default-export */
import avatar1 from './avatar-1.png'
import avatar2 from './avatar-2.png'
import avatar3 from './avatar-3.png'
import avatar4 from './avatar-4.png'
import avatar5 from './avatar-5.png'


    //decide the avatar to give to the user
    const getAvatar = (author, func, images) => {

        let num = author.length % 5

        switch (num) {
            case 0:
            default:
                func(images.avatar1)
                break;
            case 1:
                func(images.avatar2)
                break;
            case 2:
                func(images.avatar3)
                break;
            case 3:
                func(images.avatar4)
                break;
            case 4:
                func(images.avatar5)
                break;
        }

    }


export default {avatar1, avatar2, avatar3, avatar4, avatar5, getAvatar}

