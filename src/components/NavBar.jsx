// NavBar.jsx
import React from 'react';
import './NavBar.css';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';

export default function NavBar() {
  return (
  <>
    <nav className="my-4 d-flex justify-content-between align-items-center">
      <img className='img-fluid' src="https://seeklogo.com/images/A/afa-argentina-3-star-logo-CE85FC39D9-seeklogo.com.png" alt="marca" />
      <div>    
      <button><Link to={'/'} className='btn btn-dark mx-2'>Home</Link></button>
     <button><Link to={'/'} className='btn btn-dark mx-2'>Camisetas</Link></button>
     <button><Link to={'/'} className='btn btn-dark mx-2'>Pantalones</Link></button>
     <button><Link to={'/'} className='btn btn-dark mx-2'>Contacto</Link></button>
     </div>
      <CartWidget />
    </nav>
    </>
  );
}

