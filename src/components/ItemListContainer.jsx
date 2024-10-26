import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase'; 
import ProductCard from './ProductCard';
import { ThreeDot } from 'react-loading-indicators';
import "./ItemListContainer.css"
import './loader.css'; 


function ItemListContainer() {
    const { id } = useParams();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const titulo = id === "camiseta" ? "Camiseta"
        : id === "pantalon" ? "Pantalon"
        : id === "campera" ? "Campera"
        : "Todos los Productos";

    useEffect(() => {
        const fetchProducts = async () => {
            const productosCollection = collection(db, 'products');
            const q = id ? query(productosCollection, where('category', '==', id)) : productosCollection;

            try {
                const querySnapshot = await getDocs(q);
                const productosFiltrados = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    image: doc.data().image,
                    id: doc.id
                }));

                setProductos(productosFiltrados);
            } catch (error) {
                console.error('Error al obtener productos', error);
                setError('Error al cargar productos. Intenta de nuevo más tarde.');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [id]);

    if (loading) {
        return (
            <div className='loading-circle'>
                <ThreeDot variant="bounce" color="#4fc1d8" size="large" text="" textColor="#ff0000" />
            </div>
        );
    }

    return (
        <>
            <div className='title-categoria'>
                <h2>{titulo}</h2>
            </div>
            {error ? (
                <p>{error}</p>
            ) : (
                <div className='contenedor-cards'>
                    {productos.length > 0 ? (
                        productos.map((producto) => (
                            <ProductCard key={producto.id} producto={producto} />
                        ))
                    ) : (
                        <p>No hay productos disponibles en esta categoría.</p>
                    )}
                </div>
            )}
        </>
    );
}

export default ItemListContainer;
