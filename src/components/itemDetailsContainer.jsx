import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProductById } from '../asyncMock'; 

const ItemDetailsContainer = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
   
    getProductById(Number(id)).then((productData) => {
      setProduct(productData);
    });
  }, [id]);

  if (!product) return <p>Cargando detalles del producto...</p>; 

  return (
    <div>
      <h2>Detalles de {product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p><strong>Categoría:</strong> {product.category}</p>
      <p><strong>Descripción:</strong> {product.description}</p>
      <p><strong>Talles disponibles:</strong> {product.description}</p>
      <p><strong>Precio:</strong> {product.price}</p>
    </div>
  );
};

export default ItemDetailsContainer;
