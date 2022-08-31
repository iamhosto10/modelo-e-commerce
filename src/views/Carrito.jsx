import React, { useState } from "react";
import { useCarritoContext } from "../contexts/carritoContext";
import { Link } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import loginEmail from "../functions/loginemail";
import createcheckout from "../functions/createcheckout";

function Carrito() {
  const { carrito } = useCarritoContext();
  const { user, setUser } = useUserContext();
  const [ismodal, setIsmodal] = useState(false);

  function isAuth() {
    // funcion que me dice si esta autenticado o no
    if (user) {
      console.log("esta con la sesion iniciada");
      //aqui vamos a hacer la funcion de compra por que ya iniciamos sesion

      createcheckout(user.uid, carrito);
    }
    if (!user) {
      setIsmodal(true);
    }
  }
  function login(e) {
    e.preventDefault();
    const correo = e.target.email.value;
    const password = e.target.password.value;
    loginEmail(correo, password).then((e) =>
      createcheckout(e.user.uid, carrito)
    );
    setIsmodal(false);
    //aqui vamos a hacer la funcion de compra por que ya inciamos sesion
    console.log("usuario");

    if (user) {
      console.log("esta con la sesion iniciada");
      //aqui vamos a hacer la funcion de compra por que ya iniciamos sesion
      console.log(user);
      console.log(user.uid);
      // createcheckout(user.uid, carrito);
    }
    // createcheckout(user.uid, carrito);
  }
  return (
    <div className="relative">
      <div
        id="mcomprar"
        className={`absolute top-0 left-0 bg-slate-600/10 w-screen h-screen z-30 backdrop-blur-md flex flex-col justify-center items-center 
        ${ismodal ? "block" : "hidden"}`}
      >
        <div className="bg-white w-1/3 h-1/3 flex flex-col item-center justify-evenly ">
          <h3>Inicia Sesion</h3>
          <form onSubmit={(e) => login(e)} className="flex flex-col">
            <input type="text" name="email" placeholder="correo"></input>
            <input
              type="password"
              name="password"
              placeholder="password"
            ></input>
            <button>Iniciar Sesion</button>
          </form>
        </div>
      </div>
      <ul>
        {carrito?.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>

      <button className="bg-slate-800 px-5 py-3 text-white" onClick={isAuth}>
        COMPRAR
      </button>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}

export default Carrito;
