import React, { useContext, useState } from 'react';
import { Context } from '../Context/Context';
import './Search.css';

const Search = () => {
  const { getApiData } = useContext(Context)
  const [values, setValues] = useState('')

  const updateCity = (event) => {
    const searchedCity = event.target.value;
    setValues(searchedCity)
  }

  const searchSubmit = (e) => {
    e.preventDefault();
    getApiData(values);
  }

  return (
    <div className='searchNav'>
      <p className='searchTitle'>Search city</p>
      <form className='searchForm'>
        <input onChange={updateCity} placeholder='City' name='City' value={values}></input>
        <button onClick={searchSubmit}>Buscar</button>
      </form>
    </div>
  )
}

export default Search