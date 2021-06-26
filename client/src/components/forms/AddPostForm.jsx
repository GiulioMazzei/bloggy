const AddPostForm = ({ post, onChange, onClick, wantToUpdate }) => {
    return (
        <div className='add-post-container'>

            <div className="form-group">
                <div className='label-box'><label htmlFor="title">Title</label></div>
                <input
                    type="text"
                    id="title"
                    required
                    value={post.title}
                    onChange={onChange[0]}
                    name="title"
                    placeholder="Enter The Title"
                />
            </div>

            <div className="form-group">
                <div className="label-box"><label htmlFor="description">Content</label></div>
                <textarea
                    type="text"
                    id="content"
                    required
                    value={post.description}
                    onChange={onChange[0]}
                    name="content"
                    placeholder="Enter The Content"
                />
            </div>

            <div className="form-group">
                <div className="label-box"><label htmlFor="category">Category</label></div>
                <select onChange={onChange[1]}>
                    <option name="Fashion" value="Fashion">Fashion</option>
                    <option name="Food" value="Food">Food</option>
                    <option name="House" value="House">House</option>
                    <option name="Sport" value="Sport">Sport</option>
                    <option name="Science" value="Science">Science</option>
                    <option name="Technology" value="Technology">Technology</option>
                </select>
            </div>

            <div className="button-box">
                <button onClick={onClick} className="btn btn-success">{wantToUpdate ? 'Update Post' : 'Add Post'}</button>
            </div>

        </div>
    )
}

export default AddPostForm