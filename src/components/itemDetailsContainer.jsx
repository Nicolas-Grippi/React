import { useEffect, useState } from 'react';
import { getProduct } from '../asyncMock';


export default function ProductView() {
   
    const ItemDetailsContainer = () =>{
    const [product, setProduct] = useState(null);
   

    useEffect(() => {
        getProductById('1')
        .then(response)=>{
})
   .catch(error =>{
console.error(error)

   })
},[])


    return (
        <article>
            <h2>Detalles del producto</h2>
            <h4>{item.title} - <p>{item.category}</p></h4>
            <img src={item.image} alt={item.title} />
            <p>Descripción: {item.description}</p>
            <p>Precio: {item.price}</p>
        </article>
    );

