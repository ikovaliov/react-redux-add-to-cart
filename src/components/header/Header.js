import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({ numItems, total }) => {
  return (
    <header className='header row'>
      <Link to='/' className='logo text-dark'>
        Watches
      </Link>
      <Link to='/cart'>
        <div className='shopping-cart'>
          <i className='cart-icon fa fa-shopping-cart' />
          {numItems} items (${total})
        </div>
      </Link>
    </header>
  );
};

export default Header;
