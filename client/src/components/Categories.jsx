import { useState, useContext } from "react"

import { GlobalContext } from "../context/GlobalContext"

import PostService from "../services/post.service"

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

            <div className={`category-box ${isActive(0)}`} onClick={() => handleOnClick(0, '')}>
                <p>All</p>
            </div>

            <div className={`category-box ${isActive(1)}`} onClick={() => handleOnClick(1, 'Fashion')}>
                <p>Fashion</p>
            </div>

            <div className={`category-box ${isActive(2)}`} onClick={() => handleOnClick(2, 'Food')}>
                <p>Food</p>
            </div>

            <div className={`category-box ${isActive(3)}`} onClick={() => handleOnClick(3, 'House')} >
                <p>House</p>
            </div>

            <div className={`category-box ${isActive(4)}`} onClick={() => handleOnClick(4, 'Sport')} >
                <p>Sport</p>
            </div>

            <div className={`category-box ${isActive(5)}`} onClick={() => handleOnClick(5, 'Science')} >
                <p>Science</p>
            </div>

            <div className={`category-box ${isActive(6)}`} onClick={() => handleOnClick(6, 'Technology')}>
                <p>Technology</p>
            </div>

        </div>
    )
}

export default Categories
