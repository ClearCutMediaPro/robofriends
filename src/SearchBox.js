import React from 'react';

/**
 * We have created the SearchBox which 
 * has a function which returns an input
 */

const SearchBox = ({searchField, searchChange}) => {
    return (
      <div className="pa2">
        <input
          className="pa3 ba b--green bg-lightest-blue"
          type="search"
          placeholder="search robots"
          onChange={searchChange}
        />
      </div>
    );
}

export default SearchBox;