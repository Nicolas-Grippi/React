import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCartItems } from '../../firebase/firebase'; // Asegúrate de tener esta función

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await getCartItems();
      setCartItems(items);
    };

    fetchCartItems();
  }, []);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - Cantidad: {item.quantity} - Precio: ${item.price}
          </li>
        ))}
      </ul>

      {cartItems.length > 0 && (
        <Link to="/checkout">
          <button className="btn btn-primary">Ir al Checkout</button>
        </Link>
      )}
    </div>
  );
}
