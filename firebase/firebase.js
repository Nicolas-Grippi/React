
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, getDocs, collection, query, where, setDoc, addDoc, updateDoc, writeBatch } from 'firebase/firestore';


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
    const documentRef = doc(db, 'products', id);
    try {
        const snapshot = await getDoc(documentRef);
        return snapshot.data();
    } catch (error) {
        console.error("error al obtener el doc: ", error);
    }
}

// Obtener toda una colección
export async function getProducts() {
    try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productsList = querySnapshot.docs.map(docu => ({
            id: docu.id,
            ...docu.data()
        }));
        return productsList;
    } catch (error) {
        console.error("error al obtener el doc: ", error);
    }
}

// Filtros por categoría
export async function filterProductsByCategory(categoryId) {
    try {
        const filteredQuery = query(
            collection(db, 'products'),
            where('category', '==', categoryId) 
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

// Enviar una nueva orden de pedido
export async function sendOrder(order) {
    const ordersCollection = collection(db, 'orders');
    try {
        const docRef = await addDoc(ordersCollection, order);
        console.log('Nueva orden generada: ' + docRef.id);
        return docRef.id;
    } catch (error) {
        console.log('Error al agregar el documento: ' + error);
    }
}

// Actualización de un producto
export async function updateProduct(id, toUpdate) {
    const itemRef = doc(db, 'products', id);
    try {
        await updateDoc(itemRef, toUpdate);
    } catch (error) {
        console.log('Error de actualización: ' + error);
    }
}

// Obtener la cantidad de productos en el carrito
export async function getCartItemCount() {
    try {
        const querySnapshot = await getDocs(collection(db, 'cart'));
        return querySnapshot.size; 
    } catch (error) {
        console.error("Error al obtener el carrito: ", error);
        return 0; 
    }
}

// Actualizar la cantidad de productos en el carrito
export async function updateCartItemCount(newCount) {
    const cartDocRef = doc(db, 'cart', 'cartItem'); 
    try {
        await setDoc(cartDocRef, { count: newCount }, { merge: true }); 
    } catch (error) {
        console.error("Error al actualizar el carrito: ", error);
    }
}
