import { useParams } from 'react-router-dom';
import { getProduct } from '../asyncMock';
import { useEffect, useState } from 'react';

export default function ProductView(){

const [product, setProduct] = useState({})

const { id } = useParams();

useEffect(() => {
    setProduct(getProduct(id))
}, []);

return (
    <>
        <article>
            <h2>Detalles del producto</h2>
            <h4>{product.title} - <p>{product.category}</p></h4>
            <img src={product.image} alt={product.title} />
            <p>Descripcion: {product.description}</p>
            <p>{product.price} </p>
        </article>
    </>
)
}