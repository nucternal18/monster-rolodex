import React from 'react';
import './search-box.css';

const searchBox = ({handleChange, placeholder}) => {
    return (
        <div>
            <input
                className="search"
                type="search"
                name="" id=""
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )
}

export default searchBox
