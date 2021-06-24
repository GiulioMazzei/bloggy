import { useContext } from "react"

import { GlobalContext } from "../context/GlobalContext"

import PostService from "../services/post.service"

import { FiMenu } from 'react-icons/fi' //all
import { GiLargeDress } from 'react-icons/gi' //fashion
import { IoFastFood } from 'react-icons/io5' //food
import { AiFillHome } from 'react-icons/ai' //home
import { FaRunning } from 'react-icons/fa' //sport
import { GiMaterialsScience } from 'react-icons/gi' //science
import { FaMobileAlt } from 'react-icons/fa' //technology

const Categories = () => {

    const { posts_list } = useContext(GlobalContext)
    const [posts, setPosts] = posts_list


    const findByCategory = (category) => {

        PostService.findByCategory(category)
            .then((res) => setPosts(res.data))
            .catch((err) => console.log(err))

    }


    return (
        <div className='categories-container'>

            <div className="box-name">
                <p>Categories</p>
            </div>

            <div className='category-box active' onClick={() => findByCategory('')}>
                <FiMenu className='icon' size={25} />
                <p>All</p>
            </div>

            <div className='category-box' onClick={() => findByCategory('Fashion')}>
                <GiLargeDress className='icon' size={25} />
                <p>Fashion</p>
            </div>

            <div className='category-box' onClick={() => findByCategory('Food')}>
                <IoFastFood className='icon' size={25} />
                <p>Food</p>
            </div>

            <div className='category-box' onClick={() => findByCategory('Home')} >
                <AiFillHome className='icon' size={25} />
                <p>Home</p>
            </div>

            <div className='category-box' onClick={() => findByCategory('Sport')} >
                <FaRunning className='icon' size={25} />
                <p>Sport</p>
            </div>

            <div className='category-box' onClick={() => findByCategory('Science')} >
                <GiMaterialsScience className='icon' size={25} />
                <p>Science</p>
            </div>

            <div className='category-box' onClick={() => findByCategory('Technology')}>
                <FaMobileAlt className='icon' size={25} />
                <p>Technology</p>
            </div>

        </div>
    )
}

export default Categories
