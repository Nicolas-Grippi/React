import { useEffect, useState } from 'react';
import { getProducts } from '../firebase/firebase'; 
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams(); 

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      const filteredProducts = category
        ? allProducts.filter(product => product.category === category)
        : allProducts;

      setProducts(filteredProducts);
    };

    fetchProducts();
  }, [category]);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {products.map((product) => (
          <ul key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <NavLink to={`/item/${product.id}`} className="btn">Detalles</NavLink>           
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
