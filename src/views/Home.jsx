import React, { useState, useEffect } from "react";
import getActiveProducts from "../functions/getActiveProducts";
import ItemCard from "../components/ItemCard";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/credenciales";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Imagen1 from "../images/Imagen1.webp";
import Imagen2 from "../images/imagen2.webp";
import Imagen3 from "../images/imagen3.webp";

function Home() {
  const [productos, setProductos] = useState(null);
  const array = [
    {
      // img: "../images/Imagen1.webp",
      // img: "C:/Users/GERARDO/OneDrive/Escritorio/Proyectos React/modelo-e-commerce/src/images/Imagen1.webp",
      img: { Imagen1 },
      title: "Cuidado Facial",
      desc: "Limpiadores, serums, hidratantes, exfoliantes y mascarillas, protección solar",
      vertical: "center",
      horizontal: "end",
    },
    {
      // img: "../images/Imagen1.webp",
      // img: "C:/Users/GERARDO/OneDrive/Escritorio/Proyectos React/modelo-e-commerce/src/images/Imagen1.webp",
      img: { Imagen2 },
      title: "Cuidado Corporal",
      desc: "Cremas, aceites y geles corporales hidratantes y funcionales",
      vertical: "flex-end",
      horizontal: "center",
    },
    {
      // img: "../images/Imagen1.webp",
      // img: "C:/Users/GERARDO/OneDrive/Escritorio/Proyectos React/modelo-e-commerce/src/images/Imagen1.webp",
      img: { Imagen3 },
      title: "Cuidado Capilar",
      desc: "Shampoo, serum, aceites y mascarillas",
      vertical: "center",
      horizontal: "end",
    },
  ];
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
    <>
      <Navbar />
      <Slider array={array} autoplay={true} />

      <button onClick={cerrarsesion}>cerrar sesion</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
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
    </>
  );
}

export default Home;
