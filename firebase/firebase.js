import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection, addDoc } from "firebase/firestore"; 

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAt8sFyMtHrHSeFHcX58O1JP_a_ArPuraU",
    authDomain: "escaloneta-react.firebaseapp.com",
    projectId: "escaloneta-react",
    storageBucket: "escaloneta-react.appspot.com",
    messagingSenderId: "913771550029",
    appId: "1:913771550029:web:0282ffb02476d8d6ba9304"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Obtener producto por ID
export async function getProductById(id) {
    try {
        const docRef = doc(db, "products", id);  
        const docSnap = await getDoc(docRef); 
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };  
        } else {
            console.log("Producto no encontrado");
            return null;  
        }
    } catch (error) {
        console.error("Error al obtener el producto: ", error);  
        throw error;
    }
}

// Función para enviar una orden
export async function sendOrder(order) {
    const ordersCollection = collection(db, 'orders');
    try {
        const docRefOrder = await addDoc(ordersCollection, order);
        console.log('Nueva orden generada: ' + docRefOrder.id);
        return docRefOrder.id;
    } catch (error) {
        console.log('Error al agregar el documento: ' + error);
        throw error;  // Lanzar error para manejo en el componente
    }
}
