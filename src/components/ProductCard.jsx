import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function ProductCard({ producto }) {
    const { agregarAlCarrito } = useContext(CartContext);

    const handleAddToCart = () => {
        agregarAlCarrito(producto, 1); 
    };

    return (
        <article className="card product-card">
            <img 
                src={producto.image} // Asegúrate de acceder a 'image'
                className="card-img-top img-fluid" 
                alt={producto.title} 
            />
            <div className="card-body text-center">
                <h5 className="card-title">{producto.title}</h5>
                <button className="btn btn-primary mx-2" onClick={handleAddToCart}>Agregar al carrito</button>
                <Link to={`/item/${producto.id}`} className="btn btn-secondary mx-2">Detalles</Link> 
                
            </div>
        </article>
    );
}
