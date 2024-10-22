import '../components/ProductCard.css'; 
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase.js';  // Asegúrate de que esta ruta sea correcta
import { collection, query, where, getDocs } from 'firebase/firestore';  // Asegúrate de que esta línea esté así
import ProductCard from './ItemList.jsx';

function ItemListContainer() {
    const { id } = useParams();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const titulo = id === "bebidas" ? "Bebidas"
        : id === "cocteleria" ? "Accesorios para tu bar"
            : "Todos los Productos";

    useEffect(() => {
        const productosCollection = collection(db, 'products');
        const q = id ? query(productosCollection, where('category', '==', id)) : productosCollection;

        getDocs(q)
            .then((querySnapshot) => {
                const productosFiltrados = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    img: doc.data().img,
                    ...doc.data()
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
                <svg viewBox="25 25 50 50" className='loader'>
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
