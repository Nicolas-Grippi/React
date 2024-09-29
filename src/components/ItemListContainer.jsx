import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { getProducts } from '../asyncMock'; // Ruta corregida
import ProductCard from './ProductCard'; // Asegúrate de importar tu ProductCard

function ItemListContainer({ greetings }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts.then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <section className='container-fluid text-center'>
      <h1 className='text-primary text-center'>{greetings}</h1>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} /> // Usa el componente ProductCard
        ))}
      </div>
    </section>
  );
}

export default ItemListContainer;
