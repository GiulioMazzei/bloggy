import AuthorPost from "./AuthorPost"


const AuthorPostsList = ({ posts }) => {
    return (
        <div className='author-post-box'>
            {posts.length === 0
                ? <div className="no-post"><p></p></div>
                : posts.slice(0, 5).map((post, index) => <AuthorPost key={index} post={post} />)
            }
        </div>
    )
}

export default AuthorPostsList