import { styled } from "styled-components";
import { breakpoint } from "../../styles/breakpoints";
import { colors } from "../../styles/colors";

export const InputStyles = styled.input`
margin-left: auto;
margin-right: auto;
text-align: left;
margin-bottom: 20px;
box-sizing: border-box;
width: 100%;
height: 100%;
padding: 17px ;
padding-right: auto;
border-radius: 15px;
border: 1px solid ${colors.placeholderColor};
font-size: 16px;
background: transparent;
color: ${colors.mainTextColor};
outline: none;
position: relative;

&:focus{
    border: 1px solid ${colors.mainTextColor};
  }
::placeholder{
      color: ${colors.placeholderColor};
      font-size: 16px;
      padding: 17px;
      padding-right: auto;
  } 
    @media only screen and (min-width: ${breakpoint.tablet}) {
    padding: 25px;
    width: 375px;
  }
  @media only screen and (min-width: ${breakpoint.desktop}) {
   margin: 0;
  }
`;

export const ErrorStyles = styled.span`
    font-size: 10px;
    margin-bottom: 10px;
    color: ${colors.mainTextColor};
    outline: none;
    display: flex;
    flex-direction: column;
position: absolute;
top: 65%;
left: 15%;

@media only screen and (min-width: ${breakpoint.secondMobile}){
left: 30%;
font-size: 1px;
  }
 @media only screen and (min-width: ${breakpoint.tablet}){
left: 40%;
font-size: 14px;
  }
   @media only screen and (min-width: ${breakpoint.desktop}){
top: 75%;
left: 45%;
  }
`;

export const AcceptedStyles = styled.span`
    font-size: 14px;
    color: ${colors.mainTextColor};
    /* border: red; */
    outline: none;

`;