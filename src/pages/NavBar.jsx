import React from 'react'
import { Link } from 'react-router-dom'
import { TiThMenu } from "react-icons/ti";
const NavBar = () => {
  return (
    <div className='nav-bar'>
      <Link to='/' className='logo'>Lorry Memo Book</Link>
      <nav>
      <Link to='/trip' className='link'>Trip</Link>
      <Link className='link' to='/expense'>expense</Link>
      <Link className='link' to='/diseal'>diseal</Link>
      <Link className='link' to='/rto'>rto</Link>
      <Link className='link' to='/smailage'>smailage</Link>
      <Link className='link' to='/final'>final</Link>
    </nav>
    <button className='menubtn'><TiThMenu /></button>
    </div>
  )
}

export default NavBar