import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { getProducts } from '../asyncMock'; 

const ItemListContainer = ({ greetings }) => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    getProducts()
    .then(response => {
      setProducts(response)
    })
.catch (error => {
  console.error(error)
})
  },[])

  return (
    <div>
      <h1>{greetings}</h1>
      <ItemList products={products}/>
    </div>
  )
} 

export default ItemListContainer;
