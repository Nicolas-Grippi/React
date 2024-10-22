import './ItemDetails.css';
import ItemCount from './ItemCount';
import { CartContext } from "../../context/CartContext";
import { useState, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ItemDetail({ product, initialCount = 1 }) {
    const { agregarAlCarrito, stock, actualizarStock } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(initialCount);

    const stockDisponible = stock[product.id] !== undefined ? stock[product.id] : product.stock;

    const handleRestar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const handleSumar = () => {
        if (cantidad < stockDisponible) {
            setCantidad(cantidad + 1);
        }
    };

    const handleAgregar = () => {
        if (cantidad <= stockDisponible) {
            agregarAlCarrito(product, cantidad);
            itemAgregado();
            setCantidad(1);

            actualizarStock(product.id, stockDisponible - cantidad);
        }
    };

    const itemAgregado = () => {
        const textoUnidad = cantidad === 1 ? 'unidad' : 'unidades';
        toast.success(`¡Se agrego ${cantidad} ${textoUnidad} de ${product.nombre} al carrito!`, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };


    return (
        <div className="contenedor-detalles">
            <div className='left-img'>
                <img src={product.img} alt={product.nombre} />
            </div>
            <div className='contenedor-product'>
                <div className='descripcion-product'>
                    <h3>{product.nombre}</h3>
                    <span className='precio-product'>${product.precio.toLocaleString()}</span>
                    <p><span className='description-text'>Descripción:</span> {product.descripcion}</p>
                    <p className='stock'>Stock Disponible: {stockDisponible}</p>
                </div>
                <ItemCount
                    cantidad={cantidad}
                    handleSumar={handleSumar}
                    handleRestar={handleRestar}
                    handleAgregar={handleAgregar}
                    disabled={stockDisponible === 0}
                />
                <ToastContainer
                    toastClassName="mi-toast-container"
                    bodyClassName="mi-toast-body"
                    progressClassName="mi-toast-progress"
                />
            </div>
        </div>
    );

}

export default ItemDetail;