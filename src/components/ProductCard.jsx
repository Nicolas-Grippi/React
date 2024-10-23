import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


export default function ProductCard({ producto }) {
    const { agregarAlCarrito } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1);

    const handleAddToCart = () => {
        agregarAlCarrito(producto, cantidad);
    };

    const handleIncrement = () => {
        if (cantidad < producto.stock) setCantidad(cantidad + 1);
    };

    const handleDecrement = () => {
        if (cantidad > 1) setCantidad(cantidad - 1);
    };

    return (
        <article className="card product-card">
            <img 
                src={producto.image}
                className="card-img-top img-fluid" 
                alt={producto.title} 
            />
            <div className="card-body text-center">
                <h5 className="card-title">{producto.title}</h5>
                <div>
                    <button onClick={handleDecrement}>-</button>
                    <span>{cantidad}</span>
                    <button onClick={handleIncrement}>+</button>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleAddToCart}>Agregar al carrito</button>
                <Link to={`/item/${producto.id}`} className="btn btn-secondary mx-2">Detalles</Link> 
            </div>
        </article>
    );
}
