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
        <h4>Welcome {user.name}</h4>
      <Link to='/'>Home</Link>
      <br></br>
      <Link to='/library'>Library</Link>
      <br></br>
      <Link to='/writers_corner'>The Writer's Corner</Link>
      <br></br>
      <Link to='' onClick={handleLogOut}>Log Out</Link>
      <hr></hr>
    </nav>
    </>
  )
}

export default NavBar