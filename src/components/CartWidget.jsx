import React, { useEffect, useState } from 'react';
import { getCartItemCount, updateCartItemCount } from '../../firebase/firebase';

export default function CartWidget() {
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const fetchCartCount = async () => {
      const count = await getCartItemCount();
      // Si el resultado no es un número válido, asigna 0
      setItemCount(isNaN(count) ? 0 : count);
    };
    
    fetchCartCount();
  }, []);

  const addItem = async () => {
    const newCount = isNaN(itemCount) ? 1 : itemCount + 1; // Evita NaN sumando correctamente
    setItemCount(newCount);
    await updateCartItemCount(newCount);
  };

  const removeItem = async () => {
    if (itemCount > 0) {
      const newCount = isNaN(itemCount) ? 0 : itemCount - 1; // Evita NaN restando correctamente
      setItemCount(newCount);
      await updateCartItemCount(newCount);
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
