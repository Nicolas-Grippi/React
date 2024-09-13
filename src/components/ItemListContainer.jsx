import React from 'react';
import './ItemListContainer.css';


function ItemListContainer({ greetings }) {
  return (
    <section className='container-fluid text-center'>
      <h1 className='text-primary text-center '>{greetings}</h1>
    </section>
  );
}

export default ItemListContainer;
