import { useEffect, useState } from 'react';
import { getProducts } from '../asyncMock'; 
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
 
  const { category ,id } = useParams();

  useEffect(() => {
    getProducts(category ,id).then((res) => {
      setProducts(res);
    });
  }, [category, id]);



  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {products.map((product) => (
          <ul key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <NavLink to={`/item/${product.id}`} className= "btn">Detalles</NavLink>           
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
