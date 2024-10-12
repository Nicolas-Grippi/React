import React, { useEffect, useState } from 'react';
import { getCartItemCount, updateCartItemCount } from '../firebase/firebase.js'; 

export default function CartWidget() {
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const fetchCartCount = async () => {
      const count = await getCartItemCount();
      setItemCount(count);
    };
    
    fetchCartCount();
  }, []);

  const addItem = async () => {
    const newCount = itemCount + 1;
    setItemCount(newCount);
    await updateCartItemCount(newCount);
  };

  const removeItem = async () => {
    if (itemCount > 0) {
      const newCount = itemCount - 1;
      setItemCount(newCount);
      await updateCartItemCount(newCount);
    }
  };

  

  return (
    <>
      <button className='btn btn-dark mx-2' onClick={removeItem}>-</button>
      <span>{itemCount}</span>
      <button className='btn btn-dark mx-2' onClick={addItem}>+</button>
    </>
  );
}
