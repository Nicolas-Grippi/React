import { Link } from 'react-router-dom';
import './ProductCard.css';


export default function ProductCard({ item }) {
  

  return (
    

      <article>
        <h5>{item.title}</h5>
        <img src={item.image} alt={item.title}/>
       <button>
          <Link to={`/item/${item.id}`}>Detalles</Link>
          </button>
      </article>
    
  );
}
