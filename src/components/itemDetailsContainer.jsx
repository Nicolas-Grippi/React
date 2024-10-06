const ItemDetailsContainer = ({ product, onClose }) => {
  if (!product) return null; 

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
