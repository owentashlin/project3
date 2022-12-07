import React from 'react'
import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import './NavBar.css'


function NavBar({ user, setUser }) {

    function handleLogOut() {
      userService.logOut();
      setUser(null);
    }
    
    return (
    <>
    <nav className='nav'>
        <img className='book-icon' src='/images/Book-small.png' alt='book icon'/>
        <h4>Welcome {user.name}</h4>
      <Link className="w3-bar-item w3-button" to='/'>Home</Link>
      <br></br>
      <Link className="w3-bar-item w3-button" to='/library'>Library</Link>
      <br></br>
      <Link className="w3-bar-item w3-button" to='/writers_corner'>The Writer's Corner</Link>
      <br></br>
      <Link className="w3-bar-item w3-button" to='' onClick={handleLogOut}>Log Out</Link>
      <hr></hr>
    </nav>
    </>
  )
}

export default NavBar