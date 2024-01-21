import { styled } from "styled-components";


export const Box = styled.div`
  z-index: -1;
  position: relative;
  pointer-events: none;
`;

export const Sign = styled.div`
 position: absolute;
 content: '';
background-image: url('../../assets/sign.svg');
top: 20px;
height: 20px;
z-index: 999;
`