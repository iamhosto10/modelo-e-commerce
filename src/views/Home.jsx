import React, { useState, useEffect } from "react";
import getActiveProducts from "../functions/getActiveProducts";
import ItemCard from "../components/ItemCard";

function Home() {
  const [productos, setProductos] = useState(null);
  useEffect(() => {
    async function getProducts() {
      const products = await getActiveProducts();
      setProductos(products);
    }
    getProducts();
  }, []);
  return (
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
  );
}

export default Home;
