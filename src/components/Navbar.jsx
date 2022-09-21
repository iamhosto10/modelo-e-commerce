import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; //importo link para enviarlo directamente al otro url
import styled from "styled-components";
import Logo from "../images/Logo Crisnica.png";
import Burguermenu from "./Burguermenu";
import Menu from "./Menu";
import { Modal } from "reactstrap";
import Modalburguer from "./Modalburguer";

function Navbar() {
  const [click, setClick] = useState(false); // state that indicate if the burguer menu is open or not
  const [texto, setTexto] = useState(""); // state of  text in blue area
  let nuevoTexto = useRef(0);
  const textos = [
    "Pago contra - entrega",
    "3 a 5 días hábiles llega tu producto ",
  ];
  function repetir() {
    nuevoTexto.current = nuevoTexto.current + 1;
    if (nuevoTexto.current === 2) {
      nuevoTexto.current = 0;
    }
    setTexto(textos[nuevoTexto.current]);
  }
  useEffect(() => {
    setTimeout(() => {
      repetir();
      console.log(nuevoTexto.current);
    }, 6000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [texto]);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <Navbarc>
        <div className="parteazul">
          <h1>{texto}</h1>
        </div>
        <div className="parteblanca">
          <section className="burger">
            <Burguermenu click={click} handleClick={handleClick} />
          </section>
          <section className="logo">
            <Link to={"/"}>
              <img src={Logo} alt="Logo Crisnica" />
            </Link>
          </section>
        </div>
        <div className="parterosada">
          <Menu />
        </div>
      </Navbarc>
      <Modalb>
        <Modalburguer />
      </Modalb>
    </>
  );
}

export default Navbar;

const Modalb = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

const Navbarc = styled.nav`
  width: 100%
  padding: 0.4em;
  .parteazul { 
    height: 30px;
    background-color: #b2e0ff;
    h1 {
        text-align: center;
        pading:auto;
        color:white;
    }
  }
  .parteblanca {
    @media(max-width: 768px){
      box-shadow: 0px 10px 10px -10px #592A08;   
    }
    @media(min-width: 769px){
      .burger{
        display:none;
      }
    }
    margin: 0; padding: 0;
    height: 87px;
    background-color: white;
    display:flex;
    align-items: center;
    justify-content: center;
    .burger{
      min-width: 10px;
      min-height: 10px;
    }
    .logo{
      position: static;
      top: -22px;
      max-width: 120px;
      min-heigth: 120px;
      margin: 0 auto;  
    }
  }
  .parterosada {
    @media(max-width: 768px){
      display: none;
    }
    height: 50px;
    background-color: #ffe8f1;
    display:flex;
    align-items: center;
    justify-content: center;
    // box-shadow: 0px 1px 7px -7px #592A08;
    box-shadow: 0px 10px 10px -10px #592A08;   
    h2{
        padding: 0 13px;
        font-family: Lato, sans-serif;
        font-size: .76470588235294rem;
        font-weight: 600;
        text-decoration: none;
        background-color: transparent;
        color: white;
        text-shadow: black 0.07em 0.07em 0.2em;
        text-align:left;
        text-transform: uppercase;
        
    }
    h2:hover{
        transition-property: all;
        transition-duration: 0.3s;
        transition-timing-function: ease;
        transition-delay: 0s;
        transform: scale(1.2);
        color:#c2326e;
    }
  }
`;
