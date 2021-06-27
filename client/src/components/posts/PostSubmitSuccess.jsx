const PostSubmitSuccess = ({ onClick }) => {
    return (
        <div className='post-submit-success'>

            <div className="message-box">
                <p>You Post has been successfully published</p>
            </div>

            <button onClick={onClick}>ADD NEW</button>

        </div>
    )
}

export default PostSubmitSuccess
