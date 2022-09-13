import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"; // para obtener el parametro
import getProductsById from "../functions/getProductByid";
import { useCarritoContext } from "../contexts/carritoContext";
import Navbar from "../components/Navbar";

function Producto() {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState(null);
  const { carrito, setCarrito } = useCarritoContext();
  useEffect(() => {
    async function getProductInfo() {
      const product = await getProductsById(id);
      console.log(product);
      setProductInfo(product);
    }
    getProductInfo();
  }, [id]);

  function addtocart() {
    setCarrito([...carrito, productInfo]);
  }

  return (
    <>
      {" "}
      <Navbar />
      <div className="w-screen h-screen flex flex-col bg-blue-300">
        <h1 className="text-5xl font-bold underline">
          Producto: {productInfo?.name}
        </h1>
        <Link to="/Carrito">
          <button>carrito</button>
        </Link>
        <img
          src={productInfo?.images[0]}
          alt={productInfo?.name}
          className="max-w-1/3 mx-auto"
        />
        {/* <button>Añadir a Carrito</button> */}
        <button onClick={addtocart}>Añadir a Carrito</button>
        <button>Comprar Ahora</button>
      </div>
    </>
  );
}

export default Producto;
