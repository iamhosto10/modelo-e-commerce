import { db } from "../firebase/credenciales"; // importo la base de datos de firebase
import { collection, getDoc, doc } from "firebase/firestore"; // obtengo funciones que utilizare para obtener ciertos datos de firebase

async function getProductsById(id) {
  const collectionRef = collection(db, "products");
  const docuRef = doc(collectionRef, id);
  const snapDoc = await getDoc(docuRef);
  const producto = snapDoc.data();
  return producto;
}

export default getProductsById;
