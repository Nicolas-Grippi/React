import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { sendOrder } from '../../firebase/firebase'; 
import "./InfoDeUsuario.css";
import Swal from 'sweetalert2';

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
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Los correos electrónicos no coinciden',
            });
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
            total: precioTotal() || 0, 
        };

        console.log('Orden a enviar:', order); 

        for (const key in order) {
            if (order[key] === undefined) {
                console.error(`El campo ${key} está indefinido.`);
            }
        }

        
        try {
            const orderId = await sendOrder(order);
            Swal.fire({
                icon: 'success',
                title: 'Orden Confirmada',
                text: `ID de la Orden: ${orderId}`,
            });
            vaciarCarrito();
        } catch (error) {
            console.error('Error al enviar la orden:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo procesar la orden. Intenta nuevamente.',
            });
        }
    };

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form onSubmit={handleSubmit} className="formulario">
            <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                onChange={handleInputChange}
                required
                className="input-formulario"
            />
            <input
                type="text"
                name="apellido"
                placeholder="Apellido"
                onChange={handleInputChange}
                required
                className="input-formulario"
            />
            <input
                type="tel"
                name="telefono"
                placeholder="Teléfono"
                onChange={handleInputChange}
                required
                className="input-formulario"
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleInputChange}
                required
                className="input-formulario"
            />
            <input
                type="email"
                name="emailConfirm"
                placeholder="Confirmar Email"
                onChange={handleInputChange}
                required
                className="input-formulario"
            />
            <button type="submit" className="button-confirmar">Confirmar Compra</button>
        </form>
    );
};

export default InfoBuyer;
