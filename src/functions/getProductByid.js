import { db } from "../firebase/credenciales"; // importo la base de datos de firebase
import { collection, getDoc, getDocs, doc } from "firebase/firestore"; // obtengo funciones que utilizare para obtener ciertos datos de firebase

async function getProductsById(id) {
  const collectionRef = collection(db, "products");
  const docuRef = doc(collectionRef, id);
  const snapDoc = await getDoc(docuRef);
  const producto = snapDoc.data();
  producto.id = snapDoc.id;
  const preciosSnap = await getDocs(collection(snapDoc.ref, "prices"));
  producto.prices = preciosSnap.docs[0].data();
  producto.pricesid = preciosSnap.docs[0].id;

  return producto;
}

export default getProductsById;
