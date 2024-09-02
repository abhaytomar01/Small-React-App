import React from 'react';
// import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar text-center min-w-1/4">
      <input
        className='sm:w-1/4 px-5 py-3 ml-5 mt-5 mb-3 text-white bg-transparent border-2 rounded-lg border-zinc-500 outline-none'
        type="text"
        placeholder="Search for a Pokémon..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <hr className='mb-5 mt-2 h-1 mx-3 rounded-xl bg-zinc-500 border-none'></hr>
    </div>

  );
};

export default SearchBar;