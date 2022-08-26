import { db } from "../firebase/credenciales";
import { collection, getDocs, query, where } from "firebase/firestore";

export default async function () {
  const collectionRef = collection(db, "products");
  const filtrar = query(collectionRef, where("active", "==", true));
  const snaps = await getDocs(filtrar);
  const productos = [];

  // snaps.forEach((doc) => {
  //   console.log(doc.data());
  // });

  for await (const snap of snaps.docs) {
    const producto = snap.data();
    producto.id = snap.id;
    const preciosSnap = await getDocs(collection(snap.ref, "prices"));
    producto.prices = preciosSnap.docs[0].data();
    productos.push(producto);
  }
  console.log(productos);

  return productos;

  // snaps.forEach((doc) => {
  //   productos.push(doc.data());
  // });
  // console.log(productos);
}
