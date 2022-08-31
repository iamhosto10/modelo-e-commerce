import { db } from "../firebase/credenciales"; // importo la base de datos de firebase
import { collection, getDocs, query, where } from "firebase/firestore"; // obtengo funciones que utilizare para obtener ciertos datos de firebase

export default async function () {
  const collectionRef = collection(db, "products"); // obtengo todos los productos de la base de datos
  const filtrar = query(collectionRef, where("active", "==", true)); // filtro los productos de la base de datos
  const snaps = await getDocs(filtrar); // los guardo en la variable snaps
  const productos = [];

  // snaps.forEach((doc) => {
  //   console.log(doc.data());
  // });

  // obtengo los precios debido a que los precios son otro array en firebase
  for await (const snap of snaps.docs) {
    const producto = snap.data();
    producto.id = snap.id;
    const preciosSnap = await getDocs(collection(snap.ref, "prices"));
    producto.prices = preciosSnap.docs[0].data();
    producto.pricesid = preciosSnap.docs[0].id;
    productos.push(producto);
  }
  console.log(productos);

  return productos;

  // snaps.forEach((doc) => {
  //   productos.push(doc.data());
  // });
  // console.log(productos);
}
