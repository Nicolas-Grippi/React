// CartWidget.jsx
import React from 'react';

const CartWidget = () => {
  const cartCount = 5;

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span role="img" aria-label="carrito">🛒</span> 
      <span style={{ marginLeft: '5px', color: '#fff' }}>{cartCount}</span>
    </div>
  );
};

export default CartWidget;
