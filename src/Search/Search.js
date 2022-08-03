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
    setValues('');
  }

  return (
    <div className='searchNav'>
      <form className='searchForm'>
        <input onChange={updateCity} placeholder='Search City' name='City' value={values}></input>
        <button onClick={searchSubmit}>Buscar</button>
      </form>
    </div>
  )
}

export default Search