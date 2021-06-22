import React from 'react'

const SearchBox = ({ value, onChange, onClick }) => {
    return (
        <div className='search-box'>
            <input
                type="search"
                value={value}
                onChange={onChange}
                placeholder='Search For Posts'
            />

            <button onClick={onClick}>SEARCH</button>
        </div>
    )
}

export default SearchBox
