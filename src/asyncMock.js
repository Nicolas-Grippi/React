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
    title:'Argentina Suplente',
    price: '$35.000',
    category: 'campera',
    description: 'Talles: XL, L , M, S, XS',
    image:
    'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/29825b2765df4f449134febbd28f4f66_9366/Camiseta_Alternativa_Argentina_24_Azul_IP8403_01_laydown.jpg'
},
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products); // Simula la llamada de API con un delay
    }, 2000); // 500ms de delay
  });
};

//export const getProduct = (id) => {
 // return products.find((products) => products.id == id);
//};

//export const getCategory = (category) => {
 // return products.filter((products) => products.category === category);
//};