import { useState, useEffect } from 'react';
import { getProducts } from '../asyncMock.js'; 
import ProductCard from './ProductCard.jsx';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts.then(data => {
     
      setProducts(data);
    });
  }, []);

  return (
    <section>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}