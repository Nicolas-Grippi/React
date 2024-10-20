import { Link } from 'react-router-dom';
import { addToCart } from '../../firebase/firebase';

export default function ProductCard({ product }) {
  
  const handleAddToCart = () => {
    addToCart(product, 1); 
  };

  return (
    <article className="card product-card">
      <img 
        src={product.image} 
        className="card-img-top img-fluid" 
        alt={product.title} 
      />
      <div className="card-body text-center">
        <h5 className="card-title">{product.title}</h5>
        <button className="btn btn-primary mx-2" onClick={handleAddToCart}>Agregar al carrito</button>
        <Link to={`/product/${product.id}`} className="btn btn-secondary mx-2">Detalles</Link>
      </div>
    </article>
  );
}
