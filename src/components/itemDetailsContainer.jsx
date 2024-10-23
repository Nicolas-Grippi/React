import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../firebase/firebase'; // Importa correctamente la función desde tu archivo firebase.js

const ItemDetailsContainer = () => {
    const { id } = useParams();  // Usamos useParams para obtener el ID de la URL
    const [product, setProduct] = useState(null);  // Estado para almacenar el producto
    const [loading, setLoading] = useState(true);  // Estado de carga

    // useEffect para obtener el producto basado en el ID
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await getProductById(id);  // Llamamos a la función de Firebase
                if (productData) {
                    setProduct(productData);  // Guardamos el producto en el estado
                } else {
                    console.log('Producto no encontrado');  // Producto no existe
                }
            } catch (error) {
                console.error('Error al obtener el producto:', error);  // Error al obtener producto
            } finally {
                setLoading(false);  // Quitamos el estado de carga
            }
        };

        fetchProduct();
    }, [id]);

    // Mostramos un mensaje de carga mientras obtenemos el producto
    if (loading) {
        return <div>Cargando...</div>;
    }

    // Si no se encuentra el producto, mostramos un mensaje
    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    // Renderizamos los detalles del producto si todo salió bien
    return (
        <div>
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            {/* Aquí puedes agregar más detalles del producto */}
        </div>
    );
};

export default ItemDetailsContainer;
