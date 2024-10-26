import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { sendOrder } from '../../firebase/firebase';
import { ThreeDot } from 'react-loading-indicators';
import '../components/Checkout.css';
import './loader.css'; 

export default function Checkout() {
    const { order } = useContext(CartContext);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleOrder = async () => {
        setLoading(true); 
        try {
            await sendOrder(order);
         
        } catch (err) {
            setError('Error al procesar la orden. Inténtalo de nuevo.');
        } finally {
            setLoading(false); 
        }
    };

    return (
        <>
            {error && <p className="error-message">{error}</p>}
            {loading ? (
                <div className="loading-circle">
                    <ThreeDot variant="bounce" color="#4fc1d8" size="large" text="" textColor="#ff0000" />
                </div>
            ) : order ? (
                <div className="container-compra">
                    {order.buyer ? (
                        <h2 className="thank-you-title">¡GRACIAS POR TU COMPRA, {order.buyer.nombre}!</h2>
                    ) : (
                        <h2 className="thank-you-title">¡GRACIAS POR TU COMPRA!</h2>
                    )}
                    <div className="order-details">
                        <p className="order-id">ID de la Orden: <span>{order.id}</span></p>
                        <h4 className="product-title">Productos comprados:</h4>
                        {order.items.map((product) => (
                            <div key={product.id} className="product-item">
                                <p className="product-name">{product.nombre}</p>
                                <p className="product-quantity"><span className='subrayado'>Cantidad:</span> {product.cantidad}</p>
                                <p className="product-price"><span className='subrayado'>Precio unitario:</span> <span>${product.precio.toLocaleString()}</span></p>
                                <p className="product-subtotal"><span className='subrayado'>Precio total:</span> <span>${(product.precio * product.cantidad).toLocaleString()}</span></p>
                            </div>
                        ))}
                        <h3 className="final-price">PRECIO FINAL: <span>${order.total.toLocaleString()}</span></h3>
                        <h4 className="buyer-info-title">Datos del comprador:</h4>
                        <div className='info-buyer'>
                            <p className='buyer-info'><span>Nombre Completo:</span> {order.buyer.nombre}</p>
                            <p className='buyer-info'><span>DNI: </span>{order.buyer.dni}</p>
                            <p className='buyer-info'><span>Email: </span>{order.buyer.email}</p>
                            <p className='buyer-info'><span>Dirección:</span> {order.buyer.direccion}</p>
                            <p className='buyer-info'><span>Localidad: </span>{order.buyer.localidad}</p>
                            <p className='buyer-info'><span>Código Postal: </span>{order.buyer.cp}</p>
                        </div>
                    </div>
                    <Link to={'/'}>
                        <button className='home-link'>Volver al Inicio</button>
                    </Link>
                </div>
            ) : (
                <div className='loading-circle'>
                    <ThreeDot variant="bounce" color="#4fc1d8" size="large" text="" textColor="#ff0000" />
                </div>
            )}
        </>
    );
}
