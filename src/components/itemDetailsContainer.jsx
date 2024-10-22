import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from './ItemDetails'; // Asegúrate de importar correctamente tu componente ItemDetail

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const db = getFirestore();
        const getProduct = doc(db, 'products', id);

        getDoc(getProduct)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setProduct({ id: snapshot.id, ...snapshot.data() });
                } else {
                    setError("El producto no existe.");
                }
            })
            .catch((error) => {
                setError("Error obteniendo el producto: " + error.message);
            });
    }, [id]);

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            {product ? <ItemDetail product={product} /> : <div className='loading-circle'>
                <svg viewBox="25 25 50 50" className='loader'>
                    <circle r="20" cy="50" cx="50"></circle>
                </svg>
            </div>}
        </div>
    );
};

export default ItemDetailContainer;
