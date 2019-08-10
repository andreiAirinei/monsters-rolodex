import React from 'react';

import './search-box.style.css';

// destructure the placeholder & handleChange from the props object
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    // onChange - e - fires the synthetic event
    onChange={handleChange}
  />
);
