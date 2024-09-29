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
    title:'Argentina Titular',
    price: '$45.000',
    category: 'Camisetas',
    description: 'Talles: XL, L , M, S, XS',
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c4c8dee7623f4209b76dfd333a68c812_9366/Camiseta_Titular_Argentina_24_Blanco_IP8400_01_laydown.jpg'
    
},

{
    id:3,
    title:'Argentina Titular',
    price: '$45.000',
    category: 'Camisetas',
    description: 'Talles: XL, L , M, S, XS',
    image:
    'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c4c8dee7623f4209b76dfd333a68c812_9366/Camiseta_Titular_Argentina_24_Blanco_IP8400_01_laydown.jpg'
},
];

export const getProducts = new Promise((resolve)=> {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});

export const getProduct = (id) => {
    return products.find((products) => products.id == id);
};

export const getCategory = (category) => {
    return products.filter((products) => products.category === category);
};

