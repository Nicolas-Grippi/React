// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,doc,getDoc,getDocs,collection,query} from 'firebase/firestore'
// Your web app's Firebase configuration
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
const db = getFirestore(app);

//obtener un producto

export async function getSingleProduct(id){
    const documentRef = doc(db,'products',id);
try{
    const snapshot = await getDoc(documentRef);
    return snapshot.data();
}catch(error){
console.error("error al obtener el doc: ",error);
}

}

//obtener toda una coleccion--------------------------------------------

export async function getProducts(){  
try{
    const querySnapshot =await getDocs(collection(db,'products'))
    const productsList=querySnapshot.docs.map(docu => {
        return{
            id:docu.id,
            ...docu.data() //esto es un spread
        }
    })
    return productsList;
}catch(error){
console.error("error al obtener el doc: ",error);
}

}

//filtros por categoria------------------------------------
export async function filterProductsByCategory(categoryId) {
    try {
      const filteredQuery = query(
        collection(db, 'products'),
        where('price', '<', price)
      );
      const querySnapshot = await getDocs(filteredQuery);
      if (querySnapshot.size !== 0) {
        const productsList = querySnapshot.docs.map((docu) => {
          return {
            id: docu.id,
            ...docu.data(),
          };
        });
        return productsList;
      } else {
        console.log('Coleccion vacía !');
      }
    } catch (error) {
      console.error('Error al obtener el documento: ', error);
    }
  }
  
  //enviar una nueva orden de pedido-----------------------------------
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
  
  //actualizacion de un producto-------------------------------------------
  export async function updateProduct(id, toUpdate) {
    const itemRef = doc(db, 'products', id);
    try {
      await updateDoc(itemRef, toUpdate);
    } catch (error) {
      console.log('Error de actualizacion: ' + error);
    }
  }
  
  //actualizacion de multiples items-------------------------------------
  export async function updateMultipleItems() {
    //abrimos el batch
    const batch = writeBatch(db);
    //creamos las referencias a los items que queremos actualizar
    const itemRef1 = doc(db, 'products', 'XPwBaAUsLKObkFiAG2Cf');
    const itemRef2 = doc(db, 'orders', '6mbFPxejpPOVYuCAChAb');
    //realizar el update
    batch.update(itemRef1, { category: 'accessories' });
    batch.update(itemRef2, { total: 700 });
    //llamada asincronica
    try {
      await batch.commit(); //ejecutando actualizaciones
      console.log('Batch actualizado correctamente');
    } catch (error) {
      console.log('Error de actualizacion: ' + error);
    }
  }