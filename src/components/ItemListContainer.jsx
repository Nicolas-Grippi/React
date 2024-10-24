import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase'; 
import ProductCard from './ProductCard';

function ItemListContainer() {
    const { id } = useParams();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const titulo = id === "camiseta" ? "Camiseta"
        : id === "pantalon" ? "Pantalon"
        : id === "campera" ? "Campera"
        : "Todos los Productos";

    useEffect(() => {
        const productosCollection = collection(db, 'products');
        const q = id ? query(productosCollection, where('category', '==', id)) : productosCollection;

        getDocs(q)
            .then((querySnapshot) => {
                const productosFiltrados = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    image: doc.data().image, // Asegúrate de que estás accediendo a 'image'
                    id: doc.id
                }));

                setProductos(productosFiltrados);
            })
            .catch((error) => {
                console.error('Error al obtener productos', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className='loading-circle'>
                <svg viewBox="5 5 10 10" className='loader'>
                    <circle r="20" cy="50" cx="50"></circle>
                </svg>
            </div>
        );
    }

    return (
        <>
            <div className='title-categoria'>
                <h2>{titulo}</h2>
            </div>
            <div className='contenedor-cards'>
                {productos.length > 0 ? (
                    productos.map((producto) => (
                        <ProductCard key={producto.id} producto={producto} />
                    ))
                ) : (
                    <p>No hay productos disponibles en esta categoría.</p>
                )}
            </div>
        </>
    );
}

export default ItemListContainer;
