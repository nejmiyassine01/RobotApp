import React from 'react';

const SearchBox = ({ SearchField, SearchChange }) => {
    return (
        <div className='pa2'>
            <input 
                type='search' 
                placeholder='Search robots'
                className='pa3 ba b--green bg-lightest-blue'
                onChange={SearchChange}
            />
        </div>
    )
}

export default SearchBox;