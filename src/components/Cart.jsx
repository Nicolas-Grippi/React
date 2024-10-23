import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ImgCarrito from '../../src/assets/carrito.png';
import '../components/Cart.css'


const Cart = () => {
    const { carrito, precioTotal, vaciarCarrito, removeItem, agregarAlCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    };

    const handleClickRemoveId = (prod) => {
        removeItem(prod);
    };

    const handleSumar = (prod) => {
        if (prod.cantidad < prod.stock) {
            agregarAlCarrito(prod, 1);
        }
    };

    const handleRestar = (prod) => {
        if (prod.cantidad > 1) {
            agregarAlCarrito(prod, -1);
        }
    };

    return (
        <div className="container-carrito">
            <div className="content-carrito">
                <h1>Carro de compras</h1>
                <img className="img-carrito" src={ImgCarrito} alt="carrito de compras" />
            </div>
            {carrito.length > 0 ? (
                <>
                    <table className="tabla-content">
                        <thead>
                            <tr>
                                <th>IMAGEN</th>
                                <th>PRODUCTO</th>
                                <th>CANTIDAD</th>
                                <th>PRECIO UNITARIO</th>
                                <th>SUBTOTAL</th>
                                <th>ELIMINAR</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carrito.map((prod) => (
                                <tr key={prod.id}>
                                    <td><img src={prod.img} alt={prod.nombre} /></td>
                                    <td>
                                        <Link className="link-prod" to={`/producto/${prod.id}`}>
                                            <h3>{prod.nombre}</h3>
                                        </Link>
                                    </td>
                                    <td>
                                        <button className="btn-cantidad" onClick={() => handleRestar(prod)}>-</button>
                                        <span className="cantidad-count">{prod.cantidad}</span>
                                        <button className="btn-cantidad" onClick={() => handleSumar(prod)}>+</button>
                                    </td>
                                    <td>$ {prod.precio}</td>
                                    <td>$ {(prod.precio * prod.cantidad)}</td>
                                    <td>
                                        <ion-icon
                                            name="close-outline"
                                            onClick={() => handleClickRemoveId(prod)}
                                        ></ion-icon>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="container-vaciarCart">
                        <h2>Total a pagar: $ {precioTotal()}</h2>
                        <button className="button-vaciar" onClick={handleVaciar}>Vaciar</button>
                    </div>
                    <div className="center-btn">
                        <Link to={'/infobuyer'}>
                            <button className="terminar-compra-cart">Terminar mi compra</button>
                        </Link>
                    </div>
                </>
            ) : (
                <div className="cart-empty">
                    <h2>¡Tu carrito está <span className="empty-red">vacío!</span></h2>
                    <Link to={"/"}>
                        <button className="button">Seguir comprando
                            <ion-icon className="arrow" name="arrow-forward-outline"></ion-icon>
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Cart;