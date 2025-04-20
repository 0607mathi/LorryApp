import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TiThMenu } from 'react-icons/ti';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(prev => !prev);
  };

  return (
    <>
      <div className='nav-bar'>
        <Link to='/' className='logo'>Lorry Memo Book</Link>
        <nav className='desktop-nav'>
          <Link to='/trip' className='link'>Trip</Link>
          <Link className='link' to='/expense'>Expense</Link>
          <Link className='link' to='/diseal'>Diesel</Link>
          <Link className='link' to='/rto'>RTO</Link>
          <Link className='link' to='/smailage'>Smailage</Link>
          <Link className='link' to='/final'>Final</Link>
        </nav>
        <button className='menubtn' onClick={handleToggle}>
          <TiThMenu />
        </button>
      </div>

      {toggle && <Menu />}
    </>
  );
};

const Menu = () => {
  return (
    <nav className='menu'>
      <Link to='/trip' className='link'>Trip</Link>
      <Link className='link' to='/expense'>Expense</Link>
      <Link className='link' to='/diseal'>Diesel</Link>
      <Link className='link' to='/rto'>RTO</Link>
      <Link className='link' to='/smailage'>Smailage</Link>
      <Link className='link' to='/final'>Final</Link>
    </nav>
  );
};

export default NavBar;
