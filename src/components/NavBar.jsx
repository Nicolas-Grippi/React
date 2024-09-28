// NavBar.jsx
import React from 'react';
import './NavBar.css';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <nav className="my-4 d-flex justify-content-between align-items-center">
        <img className='img-fluid' src="https://seeklogo.com/images/A/afa-argentina-3-star-logo-CE85FC39D9-seeklogo.com.png" alt="marca" />
        <div>

          <button>
            <NavLink to={'/'}  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Home</NavLink>
            </button>

          <button>
            <NavLink to={'/products'}  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Camisetas</NavLink>
            </button>

          <button>
          <NavLink to={'/products'}  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Pantalones</NavLink>
            </button>

          <button>
          <NavLink to={'/contact'}  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Contacto</NavLink>
            </button>

        </div>
        <CartWidget />
      </nav>
    </>
  );
}

