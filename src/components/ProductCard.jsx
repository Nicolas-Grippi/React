import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './ProductCard.css'; 
import './loader.css'; 
import Swal from 'sweetalert2';

export default function ProductCard({ producto }) {
    const { agregarAlCarrito } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1);

    const handleAddToCart = () => {
        agregarAlCarrito(producto, cantidad);
        
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Producto agregado al carrito",
            showConfirmButton: false,
            timer: 1500,
        });
    };

    const handleIncrement = () => {
        if (cantidad < producto.stock) setCantidad(cantidad + 1);
    };

    const handleDecrement = () => {
        if (cantidad > 1) setCantidad(cantidad - 1);
    };

    const handleDetailsClick = () => {
        // Mostrar la alerta de detalles
        Swal.fire({
            position: "top-end",
            icon: "info",
            title: "Vas a ver los detalles del producto",
            showConfirmButton: false,
            timer: 1500,
        });
    };

    return (
        <article className="card product-card">
            <img 
                src={producto.image} 
                className="card-img-top img-fluid product-image" 
                alt={producto.title} 
            />
            <div className="card-body text-center">
                <h5 className="card-title">{producto.title}</h5>
                <p>Precio: ${producto.price}</p>
                <div className="quantity-control" style={{ display: 'none' }}>
                    <span className="mx-2">{cantidad}</span>
                </div>

                <button className="button agregar-al-carrito mx-2" onClick={handleAddToCart}>
                    Agregar al carrito
                </button>
                <Link to={`/item/${producto.id}`} className="button detalles mx-2" onClick={handleDetailsClick}>
                    Detalles
                </Link> 
            </div>
        </article>
    );
}
