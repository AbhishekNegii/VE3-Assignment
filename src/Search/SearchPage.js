import React from 'react'
import HomeButton from '../HomeButton'
import "./SearchPage.css"
import "../MainPage.css"

const SearchPage = () => {
  return (
    <div className='containerSearch'>
        <div className='home'>
      <HomeButton/>
      </div>
      <div className='textcentre'>
      <h4>Type to search</h4>
      <br/>
      <input type="text" placeholder="type text & press enter..." size="50"/>
      <br/>
      <p>Showing 0 results</p>
      </div>
    </div>
  )
}

export default SearchPage
