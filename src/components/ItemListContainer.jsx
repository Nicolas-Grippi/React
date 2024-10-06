import { useEffect, useState } from 'react';
import { getProducts } from '../asyncMock'; 
import { useParams } from 'react-router-dom';
import ItemDetailsContainer from './itemDetailsContainer'; // Importar el nuevo componente

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para el producto seleccionado
  const { category } = useParams();

  useEffect(() => {
    getProducts(category).then((res) => {
      setProducts(res);
    });
  }, [category]);

  // Función para manejar el clic en el botón "Detalles"
  const handleDetailsClick = (product) => {
    setSelectedProduct(product);
  };

  // Función para cerrar el modal de detalles
  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

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
            <button onClick={() => handleDetailsClick(product)}>Detalles</button>
          </ul>
        ))}
      </ul>

     
      {selectedProduct && (
        <ItemDetailsContainer 
          product={selectedProduct} 
          onClose={handleCloseDetails} 
        />
      )}
    </div>
  );
};

export default ItemListContainer;
