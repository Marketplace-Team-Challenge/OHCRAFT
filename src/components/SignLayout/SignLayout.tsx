import * as Styled from "./SignLayout.styled";
import decoration from '../../assets/sign.svg';


const SignLayout = () => {
  return (
    <Styled.Box>
      {/* <Styled.Sign src={decoration} alt="decoration" /> */}
      <Styled.ExtendedSign1 src={decoration} alt="decoration" />
      <Styled.ExtendedSign2 src={decoration} alt="decoration" />
      <Styled.ExtendedSign3 src={decoration} alt="decoration" />
      <Styled.ExtendedSign4 src={decoration} alt="decoration" />
      <Styled.ExtendedSign5 src={decoration} alt="decoration" />
      <Styled.ExtendedSign6 src={decoration} alt="decoration" />
      <Styled.ExtendedSign7 src={decoration} alt="decoration" />
      <Styled.ExtendedSign8 src={decoration} alt="decoration" />
      <Styled.ExtendedSign9 src={decoration} alt="decoration" />
      <Styled.ExtendedSign10 src={decoration} alt="decoration" />
      <Styled.ExtendedSign11 src={decoration} alt="decoration" />
      <Styled.ExtendedSign12 src={decoration} alt="decoration" />
      <Styled.ExtendedSign13 src={decoration} alt="decoration" />
      <Styled.ExtendedSign14 src={decoration} alt="decoration" />
      <Styled.ExtendedSign15 src={decoration} alt="decoration" />
      <Styled.ExtendedSign16 src={decoration} alt="decoration" />
      <Styled.ExtendedSign17 src={decoration} alt="decoration" />
      <Styled.ExtendedSign18 src={decoration} alt="decoration" />
      <Styled.ExtendedSign19 src={decoration} alt="decoration" />
      <Styled.ExtendedSign20 src={decoration} alt="decoration" />
      <Styled.ExtendedSign21 src={decoration} alt="decoration" />
      <Styled.ExtendedSign22 src={decoration} alt="decoration" />
      <Styled.ExtendedSign23 src={decoration} alt="decoration" />
      <Styled.ExtendedSign24 src={decoration} alt="decoration" />
      <Styled.ExtendedSign25 src={decoration} alt="decoration" />
      <Styled.ExtendedSign26 src={decoration} alt="decoration" />
      <Styled.ExtendedSign27 src={decoration} alt="decoration" />
      <Styled.ExtendedSign28 src={decoration} alt="decoration" />
      <Styled.ExtendedSign29 src={decoration} alt="decoration" />
      <Styled.ExtendedSign30 src={decoration} alt="decoration" />
      <Styled.ExtendedSign31 src={decoration} alt="decoration" />
    </Styled.Box>
  );
};

export default SignLayout;

// import React, { useEffect, useRef } from "react";
// import styled from "styled-components";
// import decoration from '../../assets/sign.svg';

// const Box = styled.div`
//   /* position: relative; */
//   width: 100%;
//   height: 100vh;
// `;

// const Sign = styled.img`
//   position: absolute;
//   z-index: 999;
// `;

// const SignLayout = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     for (let i = 0; i < 20; i++) {
//       const top = `${Math.random() * container.clientHeight}px`;
//       const left = `${Math.random() * container.clientWidth}px`;

//       const signElement = document.createElement("img");
//       signElement.src = decoration;
//       signElement.alt = "decoration";
//       signElement.style.position = "absolute";
//       signElement.style.top = top;
//       signElement.style.left = left;
//       signElement.style.zIndex = "999";

//       container.appendChild(signElement);
//     }
//   }, []);

//   return <Box ref={containerRef}></Box>;
// };

// export default SignLayout;
