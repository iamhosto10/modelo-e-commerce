import React from "react";
import styled from "styled-components";

function Burguermenu(props) {
  return (
    <Burguer>
      <div
        onClick={props.handleClick}
        className={`icon nav-icon-6 ${props.click ? "open" : ""} `}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Burguer>
  );
}

export default Burguermenu;

const Burguer = styled.nav`
  .nav-icon-6 {
    width: 25px;
    height: 20px;
    margin: 10px 10px;
    position: relative;
    cursor: pointer;
    display: inline-block;
  }
  .nav-icon-6 span {
    background-color: #b2e0ff;
    position: absolute;
    border-radius: 2px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    width: 100%;
    height: 3px;
  }
  .nav-icon-6 span:nth-child(1) {
    top: 0px;
    left: 0px;
  }
  .nav-icon-6 span:nth-child(2) {
    top: 8.5px;
    left: 0px;
  }
  .nav-icon-6 span:nth-child(3) {
    bottom: 0px;
    left: 0px;
  }
  //   .nav-icon-6:not(.open):hover span:nth-child(1) {
  //     transform: scaleY(1.2);
  //     left: -5px;
  //   }
  //   .nav-icon-6:not(.open):hover span:nth-child(2) {
  //     transform: rotate(5deg) scaleY(1.1);
  //   }
  //   .nav-icon-6:not(.open):hover span:nth-child(3) {
  //     transform: scaleY(1.2);
  //     left: 5px;
  //   }
  .nav-icon-6.open span:nth-child(1) {
    transform: rotate(45deg) scaleX(0.7);
    top: 13px;
    left: -8px;
  }
  .nav-icon-6.open span:nth-child(2) {
    transform: scale(0);
    transition-duration: 50ms;
  }
  .nav-icon-6.open span:nth-child(3) {
    transform: rotate(-45deg) scaleX(0.7);
    top: 13px;
    left: 7px;
  }
`;
