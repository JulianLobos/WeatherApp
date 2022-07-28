import React from 'react';
import './Search.css';

const Search = () => {
  return (
    <div className='searchNav'>
      <p className='searchTitle'>Search city</p>
      <form>
        <input placeholder='City'></input>
        <button>Buscar</button>
      </form>
    </div>
  )
}

export default Search