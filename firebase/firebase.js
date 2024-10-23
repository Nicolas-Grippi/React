import { useContext } from 'react';
import { CartContext } from '../context/CartContext'; 
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from 'firebase/firestore';

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



export async function sendOrder(order) {
    const ordersCollection = collection(db, 'orders');

    try {
        const docRefOrder = await addDoc(ordersCollection, order);
        console.log('Nueva orden generada' + docRefOrder.id);
        return docRefOrder.id
    } catch (error) {
        console.log('Error al agregar el documento' + error)
    }
}   



export const addToCart = (product, quantity) => {
    const { agregarAlCarrito } = useContext(CartContext);
    agregarAlCarrito(product, quantity);
};

export async function getProducts(){
    try{
        const querySnapshot = await getDocs(collection(db,"products"))
        if(querySnapshot.size !==0){
            const productList = querySnapshot.docs.map((docu)=>{
                console.log (docu.data(),"soff");
                return{
                    id: docu.id,
                    ...docu.data(),
                }
            })
            return productList;
        }else{
            console.log ("coleccion Vacia")
        }
    } catch(error){
        console.error("Error al obtener el doc: ", error);
    }
}