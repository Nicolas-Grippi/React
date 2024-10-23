import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { sendOrder } from '../../firebase/firebase'; // Importa la función

const InfoBuyer = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const [buyer, setBuyer] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        emailConfirm: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (buyer.email !== buyer.emailConfirm) {
            alert('Los correos electrónicos no coinciden');
            return;
        }

        const order = {
            buyer,
            items: carrito.map(item => ({
                id: item.id,
                nombre: item.nombre,
                cantidad: item.cantidad,
                precio: item.precio,
            })),
            total: precioTotal(),
        };

        const orderId = await sendOrder(order);
        alert(`Orden confirmada. ID: ${orderId}`);
        vaciarCarrito();
    };

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="nombre" placeholder="Nombre" onChange={handleInputChange} required />
            <input type="text" name="apellido" placeholder="Apellido" onChange={handleInputChange} required />
            <input type="tel" name="telefono" placeholder="Teléfono" onChange={handleInputChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
            <input type="email" name="emailConfirm" placeholder="Confirmar Email" onChange={handleInputChange} required />
            <button type="submit">Confirmar Compra</button>
        </form>
    );
};

export default InfoBuyer;
