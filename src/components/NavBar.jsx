// NavBar.jsx
import React from 'react';
import './NavBar.css';
import CartWidget from './CartWidget';

export default function NavBar() {
  return (
    <nav className="my-4 d-flex justify-content-between align-items-center">
      <img className='img-fluid' src="https://seeklogo.com/images/A/afa-argentina-3-star-logo-CE85FC39D9-seeklogo.com.png" alt="marca" />
      <div>    
     <button className='btn btn-dark mx-2'>Productos</button>
     <button className='btn btn-dark mx-2'>Outlet</button>
     <button className='btn btn-dark mx-2'>Nosotros</button>
     <button className='btn btn-dark mx-2'>Contacto</button>
     </div>
      <CartWidget />
      
    </nav>
  );
}

