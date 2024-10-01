const products = [
    {
    id:1,
    title:'Argentina Titular',
    price: '$45.000',
    category: 'Camisetas',
    description: 'Talles: XL, L , M, S, XS',
    image:
    'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c4c8dee7623f4209b76dfd333a68c812_9366/Camiseta_Titular_Argentina_24_Blanco_IP8400_01_laydown.jpg'
},


{
    id:2,
    title:'Pantalon Argentina Titular',
    price: '$25.000',
    category: 'Pantalones',
    description: 'Talles: XL, L , M, S, XS',
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e12f4c5d9a3c47bab70367385042c64e_9366/Shorts_Titular_Blanco_Argentina_24_Blanco_IP8404_01_laydown.jpg'
    
},

{
    id:3,
    title:'Argentina Suplente',
    price: '$35.000',
    category: 'Camisetas',
    description: 'Talles: XL, L , M, S, XS',
    image:
    'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/29825b2765df4f449134febbd28f4f66_9366/Camiseta_Alternativa_Argentina_24_Azul_IP8403_01_laydown.jpg'
},
];

export const getProducts = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = id 
          ? products.filter(p => p.category === id) 
          : products; 
        resolve(filteredProducts); 
      }, 2000);
    });
  };
  

  export const getProduct = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = products.find(p => p.id === Number(id)); 
        resolve(product); 
      }, 2000);
    });
  };