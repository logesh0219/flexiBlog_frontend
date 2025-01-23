import React from 'react';
import { IoSearch } from "react-icons/io5";
import './SearchBar.css'


const SearchBar = () => {
  return (
    <form className='search-bar'>
      <div className="search-bar-container">
        <IoSearch className='search-icon' />
        <input type="text" placeholder='Discover news, articles and more.' className='input-box'/>
      </div>
    </form>
  )
}

export default SearchBar