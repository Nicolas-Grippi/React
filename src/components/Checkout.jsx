import React, { useEffect, useState } from 'react';
import { getCartItems } from '../../firebase/firebase'; // Asegúrate de tener esta función
import { submitOrder } from '../../firebase/firebase'; // Para enviar la orden

export default function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [totalOrder, setTotalOrder] = useState(0);
  const [form, setForm] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    repeatEmail: ''
  });
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await getCartItems();
      setCartItems(items);
      
      // Calcular el total de la orden
      const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      setTotalOrder(total);
    };
    
    fetchCartItems();
  }, []);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.email !== form.repeatEmail) {
      setEmailError(true);
    } else {
      setEmailError(false);
      
      // Datos de la orden
      const orderData = {
        customer: {
          name: form.name,
          lastName: form.lastName,
          phone: form.phone,
          email: form.email,
        },
        items: cartItems,
        total: totalOrder,
        date: new Date().toISOString()
      };

      // Enviar la orden a Firestore
      const orderId = await submitOrder(orderData);
      console.log('Orden confirmada con ID:', orderId);

      // Redirigir o mostrar un mensaje de confirmación
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} - Cantidad: {item.quantity} - Precio: ${item.price}
              </li>
            ))}
          </ul>
          <h4>Total de la orden: ${totalOrder}</h4>

          <form onSubmit={handleSubmit}>
            <div>
              <label>Nombre:</label>
              <input 
                type="text" 
                name="name" 
                value={form.name} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            
            <div>
              <label>Apellido:</label>
              <input 
                type="text" 
                name="lastName" 
                value={form.lastName} 
                onChange={handleInputChange} 
                required 
              />
            </div>

            <div>
              <label>Teléfono:</label>
              <input 
                type="tel" 
                name="phone" 
                value={form.phone} 
                onChange={handleInputChange} 
                required 
              />
            </div>

            <div>
              <label>Email:</label>
              <input 
                type="email" 
                name="email" 
                value={form.email} 
                onChange={handleInputChange} 
                required 
              />
            </div>

            <div>
              <label>Repetir Email:</label>
              <input 
                type="email" 
                name="repeatEmail" 
                value={form.repeatEmail} 
                onChange={handleInputChange} 
                required 
              />
            </div>

            {emailError && <p style={{ color: 'red' }}>Los emails no coinciden</p>}

            <button type="submit">Confirmar Orden</button>
          </form>
        </>
      )}
    </div>
  );
}
