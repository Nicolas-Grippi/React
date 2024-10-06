const products = [
    {
    id:1,
    title:'Argentina Titular',
    price: '$45.000',
    category: 'camiseta',
    description: 'Talles: XL, L , M, S, XS',
    image:
    'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c4c8dee7623f4209b76dfd333a68c812_9366/Camiseta_Titular_Argentina_24_Blanco_IP8400_01_laydown.jpg'
},


{
    id:2,
    title:'Pantalon Argentina Titular',
    price: '$25.000',
    category: 'pantalon',
    description: 'Talles: XL, L , M, S, XS',
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e12f4c5d9a3c47bab70367385042c64e_9366/Shorts_Titular_Blanco_Argentina_24_Blanco_IP8404_01_laydown.jpg'
    
},

{
    id:3,
    title:'Campera Argentina',
    price: '$35.000',
    category: 'campera',
    description: 'Talles: XL, L , M, S, XS',
    image:
    'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d19d18879b2b484ca2dd13df8a00c5d8_9366/Buzo_con_Capucha_ADN_Argentina_con_Cierre_Frontal_24_Azul_IU2143_21_model.jpg'
},
];


export const getProducts = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => { 
      const filteredProducts = category
        ? products.filter(product => product.category === category)
        : products;
      resolve(filteredProducts); 
    }, 2000); 
  });
};
