import { useState, useContext } from 'react';
import '../components/InfoDeUsuario.css';

import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const UserInfo = () => {
    const [nombre, setNombre] = useState('');
    const [dni, setDni] = useState('');
    const [email, setEmail] = useState('');
    const [direccion, setDireccion] = useState('');
    const [localidad, setLocalidad] = useState('');
    const [cp, setCP] = useState('');
    const [error, setError] = useState('');

    const { crearOrden, vaciarCarrito } = useContext(CartContext);
    const navigate = useNavigate();

    const handleNombreChange = (e) => {
        const regex = /^[a-zA-Z\s]*$/;
        if (regex.test(e.target.value)) {
            setNombre(e.target.value);
        }
    };

    const handleDniChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setDni(value);
        }
    };

    const handleSubmit = () => {
        if (!nombre || !dni || !email || !direccion || !localidad || !cp) {
            setError('Todos los campos son obligatorios.');
            console.log({ nombre, dni, email, direccion, localidad, cp });
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('El formato del email es incorrecto.');
            return;
        }

        if ([nombre, direccion, localidad, cp].some(field => field.length < 2) || dni.length < 8) {
            setError('Todos los campos deben tener al menos 2 caracteres. El DNI debe tener al menos 8 dígitos.');
            return;
        }

        const buyer = {
            nombre,
            dni,
            email,
            direccion,
            localidad,
            cp,
        };

        crearOrden(buyer).then((newOrder) => {
            vaciarCarrito();
            navigate(`/checkout/${newOrder.id}`);
        }).catch((error) => {
            console.error("Error al crear la orden:", error);
        });
    };

    return (
        <div className='container-form'>
            <div className='title-form'>
                <h2>Completa los siguientes datos para finalizar tu compra.<ion-icon name="checkmark-outline"></ion-icon></h2>
            </div>
            <div className='formulario'>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}>
                    <div className='form-group'>
                        <label htmlFor='nombre'>Nombre Completo</label>
                        <input
                            type='text'
                            id='nombre'
                            placeholder='Nombre Completo'
                            value={nombre}
                            onChange={handleNombreChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='dni'>DNI</label>
                        <input
                            type='text'
                            id='dni'
                            placeholder='DNI'
                            value={dni}
                            onChange={handleDniChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='direccion'>Dirección</label>
                        <input
                            type='text'
                            id='direccion'
                            placeholder='Dirección'
                            value={direccion}
                            onChange={(e) => setDireccion(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='localidad'>Localidad</label>
                        <input
                            type='text'
                            id='localidad'
                            placeholder='Localidad'
                            value={localidad}
                            onChange={(e) => setLocalidad(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='cp'>Código Postal</label>
                        <input
                            type='text'
                            id='cp'
                            placeholder='Código Postal'
                            value={cp}
                            onChange={(e) => setCP(e.target.value)}
                            required
                        />
                    </div>
                    <div className='fin-compra'>
                        <button type='submit'>Finalizar mi compra</button>
                    </div>
                </form>
                {error && <p style={{ fontSize: '18px', fontWeight: 'bold', color: 'red' }}>{error}</p>}
            </div>
        </div>
    );
};

export default UserInfo;