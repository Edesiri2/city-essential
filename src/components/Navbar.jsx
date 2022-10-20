import React from 'react'
import { NavLink } from 'react-router-dom';
import photo from '../Assets/city essential.jfif'

const Navbar =() => {
    
  return (
    <div className='navBar'>
        <div className='custom_flex title'> <img className='logo' src={photo}alt="" />City Essential</div>
        <div className='menu'> 
        <ul className='nav-list'>
          <li>
          <NavLink  to="/home"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                Home
            </NavLink>
          </li>
            <li>
            <NavLink  to="/evoting"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                    E Voting
            </NavLink>
            </li>
            <li>
            <NavLink  to="/cityverse"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                    CityVerse
            </NavLink>
            </li>
            <li>
            <NavLink  to="/tenant"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                    Executive Tenants
            </NavLink>
            </li>
        </ul>
       
        
            {/* <link to="/Evoting">E VOTE</link>
            <link to= "/">Home</link>
            <link to= "/platechecker">PlateChecker</link>
         */}
        </div>
    </div>
  )
}

export default Navbar