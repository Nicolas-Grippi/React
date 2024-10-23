import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../firebase/firebase'; // Asegúrate de importar correctamente tu db

import ItemDetail from './ItemDetails'; // Asegúrate de importar este componente

const ItemDetailsContainer = () => {
    const { id } = useParams(); // Obtiene el ID como string
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const products = await getProducts(); // Obtiene la lista de productos

                // Filtra el producto por ID
                const productData = products.find(product => product.id === id); // Asegúrate de que `id` sea comparado correctamente

                if (productData) {
                    setProducto(productData);
                } else {
                    setError(true); // Manejo del error si no existe el producto
                }
            } catch (err) {
                console.error('Error al obtener el producto', err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <div>Cargando...</div>; // Puedes mejorar esta parte con un loader
    }

    if (error) {
        return <div>No hay producto disponible con este ID</div>;
    }

    return (
        <div>
            {producto && <ItemDetail product={producto} />}
        </div>
    );
};

export default ItemDetailsContainer;
