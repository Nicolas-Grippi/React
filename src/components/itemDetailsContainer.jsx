import React from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../asyncMock'; // Importa tu método para obtener productos

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    const fetchProduct = async () => {
      const products = await getProducts();
      const foundProduct = products.find((p) => p.id === parseInt(productId));
      setProduct(foundProduct);
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>Categoría: {product.category}</p>
      <p>Precio: ${product.price}</p>
      <p>Descripción: {product.description}</p> {/* Asegúrate de tener esta propiedad */}
    </div>
  );
};

export default ItemDetailContainer;
