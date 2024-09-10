// NavBar.jsx
import React from 'react';
import './NavBar.css';
import CartWidget from './CartWidget';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/" className="brand-name">Scaloneta</a>
      </div>
      <ul className="nav-links">
        <li><a href="#Productos">Productos</a></li>
        <li><a href="#Outlet">Outlet</a></li>
        <li><a href="#Nosotros">Nosotros</a></li>
        <li><a href="#Contacto">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

