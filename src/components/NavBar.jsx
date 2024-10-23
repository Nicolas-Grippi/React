import CartWidget from './CartWidget';
import '../components/NavBar.css';

import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className='header-container'>
     <NavLink to={'/'}>
          <img 
            className='img-fluid' 
            src="https://seeklogo.com/images/A/afa-argentina-3-star-logo-CE85FC39D9-seeklogo.com.png" 
            alt="marca" 
            style={{ cursor: 'pointer' }} 
          />
        </NavLink>
      <nav>
        <ul>
        <li>
  <Link to="/category/camiseta">Camisetas</Link>
</li>
<li>
  <Link to="/category/pantalon">Pantalones</Link>
</li>
<li>
  <Link to="/category/campera">Camperas</Link>
</li>

        </ul>
      </nav>
      <CartWidget />
    </header>
  );
}

