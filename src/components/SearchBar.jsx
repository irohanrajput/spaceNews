// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ setSearchQuery }) => {
    return (
        <input
            type="text"
            placeholder="Search articles..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar"
        />
    );
};

export default SearchBar;
