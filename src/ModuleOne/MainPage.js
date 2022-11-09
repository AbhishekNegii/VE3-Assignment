import React from 'react'
import { NavLink } from 'react-router-dom'
import "./MainPage.css"

const MainPage = () => {
  return (
    <div  className='container'>
      <h3>Module One</h3>
      <span className='btn_module1'>
      <NavLink to='/tab1'>Tab1</NavLink> 
      </span>
      <span className='btn_module1'>
      <NavLink to=''>Tab2</NavLink>
      </span>
      <span className='btn_module1'>
      <NavLink to=''>Tab3</NavLink>
      </span>
    </div>
  )
}

export default MainPage
