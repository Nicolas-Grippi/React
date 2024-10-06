// NavBar.jsx
import React from 'react';
import './NavBar.css';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <nav className="my-4 d-flex justify-content-between align-items-center">
        
        <NavLink to={'/'}>
          <img 
            className='img-fluid' 
            src="https://seeklogo.com/images/A/afa-argentina-3-star-logo-CE85FC39D9-seeklogo.com.png" 
            alt="marca" 
            style={{ cursor: 'pointer' }} 
          />
        </NavLink>
        <div>
          <button>
            <NavLink to={'/'} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Home
            </NavLink>
          </button>

          <button>
            <NavLink to={'/category/camiseta'} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Camiseta
            </NavLink>
          </button>

          <button>
            <NavLink to={'/category/pantalon'} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Pantalon
            </NavLink>
          </button>

          <button>
            <NavLink to={'/category/campera'} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Campera
            </NavLink>
          </button>
        </div>
        <CartWidget />
      </nav>
    </>
  );
}
