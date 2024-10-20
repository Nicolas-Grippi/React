import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, getDocs, collection, query, where, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAt8sFyMtHrHSeFHcX58O1JP_a_ArPuraU",
    authDomain: "escaloneta-react.firebaseapp.com",
    projectId: "escaloneta-react",
    storageBucket: "escaloneta-react.appspot.com",
    messagingSenderId: "913771550029",
    appId: "1:913771550029:web:0282ffb02476d8d6ba9304"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Obtener un producto
export async function getSingleProduct(id) {
    console.log("ID recibido:", id);
    const documentRef = doc(db, 'products', id);

    try {
        const snapshot = await getDoc(documentRef);
        if (snapshot.exists()) {
            return snapshot.data();
        } else {
            console.log('El documento no existe!');
        }
    } catch (error) {
        console.error("error al obtener el doc: ", error);
    }
}

// Obtener toda una colección
export async function getProducts() {
    try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        if (querySnapshot.size !== 0) {
            const productsList = querySnapshot.docs.map((docu) => {
                return {
                    ...docu.data(),
                    id: docu.id,
                };
            });
            return productsList;
        } else {
            console.log('Colección vacía');
        }
    } catch (error) {
        console.error("error al obtener el doc: ", error);
    }
}

// Filtros por categoría
export async function filterProductsByCategory(category) {
    try {
        const filteredQuery = query(
            collection(db, 'products'),
            where('category', '==', category)
        );
        const querySnapshot = await getDocs(filteredQuery);
        if (querySnapshot.size !== 0) {
            const productsList = querySnapshot.docs.map((docu) => ({
                id: docu.id,
                ...docu.data(),
            }));
            return productsList;
        } else {
            console.log('Colección vacía!');
        }
    } catch (error) {
        console.error('Error al obtener el documento: ', error);
    }
}

// Obtener los productos del carrito
export const getCartItems = async () => {
    try {
        const cartSnapshot = await getDocs(collection(db, 'cart'));
        return cartSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error('Error al obtener los items del carrito: ', error);
    }
};

// Obtener el total de productos en el carrito
export const getCartItemCount = async () => {
    const items = await getCartItems();
    return items.reduce((sum, item) => sum + item.quantity, 0);
};

// Enviar la orden a Firestore
export const submitOrder = async (orderData) => {
    try {
        const orderRef = await addDoc(collection(db, 'orders'), orderData);
        return orderRef.id;
    } catch (error) {
        console.error("Error al enviar la orden: ", error);
    }
};
