import React from 'react'
import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import './NavBar.css'


function NavBar({user, setUser}) {

    function handleLogOut() {
      userService.logOut();
      setUser(null);
    }
    
    return (
    <>
    <nav className='nav'>
        <ul className='nav-list'>
        <img className='book-icon' src='/images/Book-small.png' alt='book icon'/>
          <li><Link className="w3-bar-item w3-button" id='nav-button' to='/'>Home</Link></li>
          <li><Link className="w3-bar-item w3-button" id='nav-button' to='/library'>Library</Link></li>
          <li><Link className="w3-bar-item w3-button" id='nav-button' to='/writers_corner'>The Writer's Corner</Link></li>
        <h4><strong>Welcome: {user.name}</strong></h4>
          <li><Link className="w3-bar-item w3-button" id='nav-button' to='' onClick={handleLogOut}>Log Out</Link></li>
        </ul>
    </nav>
    </>
  )
}

export default NavBar