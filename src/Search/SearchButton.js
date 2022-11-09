import React from 'react'
import { Link } from 'react-router-dom'


const SearchButton = () => {
  return (
    <div>
      <Link to="/searchpage">     
      <img src='https://static.thenounproject.com/png/977009-200.png' alt='search' width="10%"/>
      </Link>
    </div>
  )
}

export default SearchButton
