import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Slide from "./Slide";
// import LogoCrisnica from "C:/Users/GERARDO/OneDrive/Escritorio/Proyectos React/modelo-e-commerce/src/images/Logo Crisnica.png";

function Slider(props) {
  const slides = props.array;
  const [selectedIndex, setSelectedIndex] = useState(0);

  const SelectNewImage = (next) => {
    const condition = next
      ? selectedIndex < slides.length - 1
      : selectedIndex == 0;
    const nextindex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? slides.length - 1
      : selectedIndex - 1;
    setSelectedIndex(nextindex);
  };

  useEffect(() => {
    if (props.autoplay) {
      const interval = setInterval(() => {
        SelectNewImage(true);
      }, 6000);
      return () => clearInterval(interval);
    }
  });

  const previous = () => {
    console.log("entro a previous");
    SelectNewImage(false);
  };

  const next = () => {
    console.log("entro a next");
    console.log(slides[selectedIndex]);
    SelectNewImage(true);
  };
  return (
    <>
      <Sliders>
        <Slide
          img={
            slides[selectedIndex].img[Object.keys(slides[selectedIndex].img)[0]]
          }
          title={slides[selectedIndex].title}
          desc={slides[selectedIndex].desc}
          vertical={slides[selectedIndex].vertical}
          horizontal={slides[selectedIndex].horizontal}
          right={next}
          left={previous}
        />
      </Sliders>
    </>
  );
}

export default Slider;

const Sliders = styled.div`
  max-width: 100%;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
