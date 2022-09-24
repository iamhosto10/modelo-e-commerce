import React from "react";
// import Navbar from "../components/Navbar";
import Slide from "../components/Slide";
import Imagen1 from "../images/Imagen1.webp";
function CuidadoCapilar() {
  return (
    <>
      {/* <Navbar />
      CuidadoCapilar */}
      <Slide
        img={Imagen1}
        title="Cuidado capilaaaar"
        desc="cremas y mucho mas"
        vertical="center"
        horizontal="end"
      />
    </>
  );
}

export default CuidadoCapilar;
