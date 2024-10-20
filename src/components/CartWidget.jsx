import React, { useEffect, useState } from 'react';
import { getCartItemCount, updateCartItemCount } from '../../firebase/firebase';

export default function CartWidget() {
  const [itemCount, setItemCount] = useState(0);

  // Obtener el número inicial de items en el carrito al cargar el componente
  useEffect(() => {
    const fetchCartCount = async () => {
      const count = await getCartItemCount();
      setItemCount(isNaN(count) ? 0 : count);
    };
    
    fetchCartCount();
  }, []);

  // Función para agregar un item al carrito
  const addItem = async () => {
    const newCount = isNaN(itemCount) ? 1 : itemCount + 1; // Evitar NaN sumando correctamente
    setItemCount(newCount);
    await updateCartItemCount(newCount); // Actualizar la cantidad en Firestore
  };

  // Función para quitar un item del carrito
  const removeItem = async () => {
    if (itemCount > 0) {
      const newCount = isNaN(itemCount) ? 0 : itemCount - 1; // Evitar NaN restando correctamente
      setItemCount(newCount);
      await updateCartItemCount(newCount); // Actualizar la cantidad en Firestore
    }
  };

  return (
    <>
      <button className='btn btn-dark mx-2' onClick={removeItem}>-</button>
      <span>{itemCount}</span> {/* Asegúrate de que itemCount sea un número válido */}
      <button className='btn btn-dark mx-2' onClick={addItem}>+</button>
    </>
  );
}
