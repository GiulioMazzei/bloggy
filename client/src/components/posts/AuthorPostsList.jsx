import AuthorPost from "./AuthorPost"


const AuthorPostsList = ({ posts }) => {
    return (
        <div>

            <h1>Author's Posts</h1>
            <div>
                {posts.length === 0
                    ? <p>This Author Has No Posts</p>
                    : posts.map((post, index) => <AuthorPost key={index} post={post} />)
                }
            </div>

        </div>
    )
}

export default AuthorPostsList