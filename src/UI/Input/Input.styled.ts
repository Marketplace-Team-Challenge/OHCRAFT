import { styled } from "styled-components";
import { breakpoint } from "../../styles/breakpoints";
import { colors } from "../../styles/colors";

export const inputStyles = styled.input`
margin-left: auto;
margin-right: auto;
text-align: center;
    box-sizing: border-box;
    width: 100%;
    padding: 25px ;
    padding-right: auto;
    border-radius: 15px;
    border: 1px solid ${colors.mainTextColor};
    margin-bottom: 18px;
    font-size: 16px;
    background: transparent;
    color: ${colors.mainTextColor};
    outline: none;
  @media only screen and (min-width: ${breakpoint.tablet}) {
    /* padding: 15px ;
    font-size: 18px; */
  }
:focus{
      border: 2px solid ${colors.mainTextColor};
    }
  ::placeholder{
        color: ${colors.placeholderColor};
        font-size: 16px;
        padding: 25px ;
        padding-right: auto;
        @media only screen and (min-width: ${breakpoint.tablet}){
    /* padding: 15px ;
    font-size: 18px; */
  }
    } 
`;

export const errorStyles = styled.input`
   box-sizing: border-box;
    width: 100%;
    padding: 18px ;
    padding-left: 24px;
    border-radius: 200px;
    border: 1px solid red;
    margin-bottom: 18px;
    font-size: 14px;
    background: transparent;
    color: ${colors.mainTextColor};
    outline: none;
`;

export const acceptedStyles = styled.input`
box-sizing: border-box;
    width: 100%;
    padding: 18px ;
    padding-left: 24px;
    border-radius: 200px;
    border: 1px solid green;
    margin-bottom: 18px;
    font-size: 14px;
    background: transparent;
    color: ${colors.mainTextColor};
    outline: none;

`;