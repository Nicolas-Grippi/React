import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../firebase/firebase';

const ItemDetailsContainer = () => {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);  
    const [loading, setLoading] = useState(true);  

  
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await getProductById(id);  
                if (productData) {
                    setProduct(productData);  
                } else {
                    console.log('Producto no encontrado');  
                }
            } catch (error) {
                console.error('Error al obtener el producto:', error);  
            } finally {
                setLoading(false);  
            }
        };

        fetchProduct();
    }, [id]);

   
    if (loading) {
        return <div>Cargando...</div>;
    }


    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    
    return (
        <div>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>Precio: ${product.price}</p>
            <p>descripción: {product.description} </p>
            <p></p>
           
        </div>
    );
};

export default ItemDetailsContainer;
