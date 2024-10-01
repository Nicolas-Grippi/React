import { Link } from 'react-router-dom';
import './ProductCard.css';


export default function ProductCard({ product }) {
  return (
    
      <article>
        <h5>{product.title}</h5>
        <img src={product.image} alt={product.title}/>
       <button>
          <Link to={`/product/${product.id}`}>Detalles</Link>
          </button>
      </article>
    
  )}