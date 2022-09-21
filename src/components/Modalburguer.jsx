import React from "react";
import styled from "styled-components";
import { Modal } from "reactstrap";
import Menu from "./Menu";

function Modalburguer() {
  return (
    <>
      <Modalbur>
        <section className="boton">
          <button>x</button>
        </section>

        <Menu />
      </Modalbur>
    </>
  );
}

export default Modalburguer;

const Modalbur = styled.div`
  width: 80%;
  height: 100%;
  border: 0.3px solid rgb(234, 234, 234);
  .boton {
    display: block;
    width: 100%;
    height: 53px;
  }
  button {
    width: auto;
    height: 53px;
    float: right;
    font-size: 24px;
    padding-right: 10px;
    text-align: right;
    color: rgb (43, 22, 27);
    font-weight: 600;
  }
  h2 {
    width: 100%;
    height: 70px;
    padding: 10px 20px;
    font-size: 16px;
    font-family: Lato, sans-serif;
    display: flex;
    align-items: center;
    border-top: 0.3px solid rgb(234, 234, 234);
    color: rgb(100, 86, 89);
  }
`;
