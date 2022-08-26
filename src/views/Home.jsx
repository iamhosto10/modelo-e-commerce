import React, { useState } from "react";
import getActiveProducts from "../functions/getActiveProducts";

function Home() {
  const [productos, setProductos] = useState(null);
  getActiveProducts();
  return <div className="text-3xl underline font-bold">Home</div>;
}

export default Home;
