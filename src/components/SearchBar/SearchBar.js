import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className='SearchBar'>
            <label htmlFor="search">Search for TV Show:</label>
            <input type="text" name='search' className='searchInput'/>
        </div>
    );
};

export default SearchBar;