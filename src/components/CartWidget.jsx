import '../components/CartWidget.css';
import { NavLink } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

export default function CartWidget() {

  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <NavLink to={"/cart"}>
      <div className='cart-widget'>
        <ion-icon name="cart-outline"></ion-icon>
        <span className='cart-notification'>{cantidadEnCarrito()}</span>
      </div>
    </NavLink>
  );
};