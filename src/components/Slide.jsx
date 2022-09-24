import React from "react";
import styled from "styled-components";
import Leftarrow from "../images/Leftarrow.svg";
import rightarrow from "../images/rightarrow.svg";

const Slid = styled.section`
  /* max-width: 100%; */
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  /* flex-flow: row nowrap;  abrev of flex-direction: and flex-wrap */
  justify-content: space-between;
  align-items: center;

  /* position: relative; */
  background-image: url("${(props) => props.img}");
  background-repeat: no-repeat;
  /* background-size: 100vw 100vh; */
  background-size: 120% 120%;
  background-position: center;
  animation: shrink 6s;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
  cursor: grab;
  @keyframes shrink {
    0% {
      background-size: 100% 100%;
    }

    100% {
      background-size: 120% 120%;
    }
  }
  .container {
    width: 33%;
    align-self: ${(props) => props.vertical};
    /* justify-self: ${(props) => props.horizontal}; */
    text-align: center;
    padding-top: 3%;
    padding-bottom: 3%;
    color: white;
  }

  .align_right {
    margin-left: auto;
  }
  .align_left {
    margin-right: auto;
  }

  .arrow {
    padding: 0 1% 0;
    cursor: pointer;
  }
  .arrow img {
    width: 35px;
    height: 35px;

    filter: invert(100%) sepia(1%) saturate(1812%) hue-rotate(175deg)
      brightness(111%) contrast(87%);
  }
  h2 {
    font-family: Lato, sans-serif;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    text-shadow: rgba(0, 0, 0, 0.3) 5px 5px 4px;
    text-align: center;
    cursor: grab;
  }
  p {
    font-family: Lato, sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    text-shadow: rgba(0, 0, 0, 0.3) 5px 5px 4px;
    text-align: center;
    cursor: grab;
  }
`;

function Slide(props) {
  return (
    <>
      <Slid
        img={props.img}
        title={props.title}
        desc={props.desc}
        vertical={props.vertical}
        horizontal={props.horizontal}
        right={props.right}
        left={props.left}
      >
        <div className="arrow">
          <img
            src={Leftarrow}
            alt="leftarrow"
            id="leftarrow"
            onClick={props.left}
          />
        </div>
        <div
          className={`container ${
            props.horizontal == "end"
              ? "align_right"
              : props.horizontal == "start"
              ? "align_left"
              : ""
          }`}
        >
          <h2>{props.title ? props.title : "Este es el titulo"}</h2>
          <p>{props.desc ? props.desc : "Este es la descripcion"}</p>
        </div>
        <div className="arrow">
          <img
            src={rightarrow}
            alt="rightarrow"
            id="rightarrow"
            onClick={props.right}
          />
        </div>
      </Slid>
    </>
  );
}

export default Slide;
