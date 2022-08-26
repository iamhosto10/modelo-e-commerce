import React, { useState, useEffect } from "react";
import getActiveProducts from "../functions/getActiveProducts";

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
        ? productos.map((p) => <li>{p.name + " " + p.prices.unit_amount}</li>)
        : null}
    </ul>
  );
}

export default Home;
