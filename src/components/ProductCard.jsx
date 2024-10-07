import { Link } from 'react-router-dom';
import '../components/ProductCard.css';

export default function ProductCard({ product }) {
  return (
    <article className="card product-card">
      <img 
        src={product.image} 
        className="card-img-top" 
        alt={product.title} 
      />
      <div className="card-body text-center">
        <h5 className="card-title">{product.title}</h5>
        <button className="btn">
          <Link to={`/product/${product.id}`} className="text-white text-decoration-none">Detalles</Link>
        </button>
      </div>
    </article>
  );
}
