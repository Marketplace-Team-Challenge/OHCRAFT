import styled from "styled-components";
import { colors } from "../../styles/colors";
import { breakpoint } from "../../styles/breakpoints";
import { SizeTypeI } from "../../constants/types";

interface ButtonProps {
    size?: Map<string, SizeTypeI>;
  }

export const Button = styled.button<ButtonProps>`
width: ${(props) => props.size.get("mobile").width || 'auto'};
height: ${(props) => props.size.get("mobile").height || 'auto'};;
border-radius: 15px;
background-color: ${colors.bgBtnColor};
border: none;
color: ${colors.whiteColor};
padding: 0;
font-size: 20px;
font-weight: 600;
line-height: 27.24px;
cursor: pointer;



// @media screen and (min-width: ${breakpoint.mobile}) {

  
//   }
// @media screen and (min-width: ${breakpoint.secondMobile}) {
    
//   }
  @media screen and (min-width: ${breakpoint.tablet}) {
    width: ${(props) => props.size.get("tabletDesktop").width || 'auto'};
    height: ${(props) => props.size.get("tabletDesktop").height || 'auto'};;

   
  }
@media screen and (min-width: ${breakpoint.desktop}) {
    font-size: 24px;
    line-height: 32.69px;
    
  }
`