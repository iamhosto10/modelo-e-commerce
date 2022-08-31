import React, { useState, useEffect } from "react";
import getActiveProducts from "../functions/getActiveProducts";
import ItemCard from "../components/ItemCard";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/credenciales";

function Home() {
  const [productos, setProductos] = useState(null);
  useEffect(() => {
    async function getProducts() {
      const products = await getActiveProducts();
      setProductos(products);
    }
    getProducts();
  }, []);

  function cerrarsesion() {
    signOut(auth);
  }
  return (
    <div>
      <button onClick={cerrarsesion}>cerrar sesion</button>
      <br></br>
      <br></br>
      <br></br>
      <ul>
        {productos
          ? productos.map((p) => (
              <li key={p.id}>
                <ItemCard product={p}></ItemCard>
                <br></br>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default Home;
