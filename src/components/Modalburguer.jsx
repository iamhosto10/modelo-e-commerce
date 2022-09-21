import React from "react";
import styled from "styled-components";
import Menu from "./Menu";

function Modalburguer({ click, handleClick }) {
  return (
    <>
      {click && (
        <Background>
          <Modalbur>
            <section className="boton">
              <button onClick={handleClick}>x</button>
            </section>
            <Menu />
          </Modalbur>
        </Background>
      )}
    </>
  );
}

export default Modalburguer;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 999999;
`;

const Modalbur = styled.section`
  width: 80%;
  height: 100%;
  background-color: white;
  border: 0.3px solid rgb(234, 234, 234);
  overflow: scroll;
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
