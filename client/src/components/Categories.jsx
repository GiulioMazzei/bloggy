import { useState, useContext } from "react"

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

    const [activeCategory, setActiveCategory] = useState(0)


    const findByCategory = (category) => {

        PostService.findByCategory(category)
            .then((res) => setPosts(res.data))
            .catch((err) => console.log(err))

    }

    const isActive = (num) => {
        if (activeCategory === num) return 'active'
    }

    const handleOnClick = (num, category) => {
        setActiveCategory(num)
        findByCategory(category)
    }


    return (
        <div className='categories-container'>

            <div className="box-name">
                <p>Categories</p>
            </div>

            <div className={`category-box ${isActive(0)}`} onClick={() => handleOnClick(0, '')}>
                <FiMenu className='icon' size={25} />
                <p>All</p>
            </div>

            <div className={`category-box ${isActive(1)}`} onClick={() => handleOnClick(1, 'Fashion')}>
                <GiLargeDress className='icon' size={25} />
                <p>Fashion</p>
            </div>

            <div className={`category-box ${isActive(2)}`} onClick={() => handleOnClick(2, 'Food')}>
                <IoFastFood className='icon' size={25} />
                <p>Food</p>
            </div>

            <div className={`category-box ${isActive(3)}`} onClick={() => handleOnClick(3, 'House')} >
                <AiFillHome className='icon' size={25} />
                <p>House</p>
            </div>

            <div className={`category-box ${isActive(4)}`} onClick={() => handleOnClick(4, 'Sport')} >
                <FaRunning className='icon' size={25} />
                <p>Sport</p>
            </div>

            <div className={`category-box ${isActive(5)}`} onClick={() => handleOnClick(5, 'Science')} >
                <GiMaterialsScience className='icon' size={25} />
                <p>Science</p>
            </div>

            <div className={`category-box ${isActive(6)}`} onClick={() => handleOnClick(6, 'Technology')}>
                <FaMobileAlt className='icon' size={25} />
                <p>Technology</p>
            </div>

        </div>
    )
}

export default Categories
