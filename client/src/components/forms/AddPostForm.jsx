const AddPostForm = ({ post, onChange, onClick }) => {
    return (
        <div>
            <div>

                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        required
                        value={post.title}
                        onChange={onChange}
                        name="title"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Content</label>
                    <input
                        type="text"
                        id="content"
                        required
                        value={post.description}
                        onChange={onChange}
                        name="content"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input
                        type="text"
                        id="category"
                        required
                        value={post.category}
                        onChange={onChange}
                        name="category"
                    />
                </div>

                <button onClick={onClick} className="btn btn-success">SUBMIT</button>

            </div>
        </div>
    )
}

export default AddPostForm