const PostSubmitSuccess = ({ onClick }) => {
    return (
        <div className='post-submit-success'>

            <h3>You Post has been successfully published</h3>

            <button onClick={onClick}>ADD NEW</button>

        </div>
    )
}

export default PostSubmitSuccess
