import { useEffect, useState } from 'react';
import { getProducts } from '../asyncMock'; 

const ItemListContainer = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      
      const filteredProducts = category
        ? res.filter(product => product.category === category)
        : res;

      setProducts(filteredProducts);
    });
  }, [category]); 

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {products.map((product) => (
          <ul key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>Categoría: {product.category}</p>
            <p>Precio: {product.price}</p>
            <button>Detalles</button>
          </ul>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;
