import { db } from "../firebase/credenciales";
import { collection, getDocs, query, where } from "firebase/firestore";

export default async function () {
  const collectionRef = collection(db, "products");
  const filtrar = query(collectionRef, where("active", "==", true));
  const snaps = await getDocs(filtrar);
  const productos = [];

  snaps.forEach((doc) => {
    productos.push(doc.data());
  });
  console.log(productos);
}
