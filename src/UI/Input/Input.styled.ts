import { styled } from "styled-components";
import { breakpoint } from "../../styles/breakpoints";
import { colors } from "../../styles/colors";

export const InputStyles = styled.input`
margin-left: auto;
margin-right: auto;
text-align: left;
    box-sizing: border-box;
    max-width: 344px;
    padding: 17px ;
    padding-right: auto;
    border-radius: 15px;
    border: 1px solid ${colors.mainTextColor};
    font-size: 16px;
    background: transparent;
    color: ${colors.mainTextColor};
    outline: none;
     @media only screen and (min-width: ${breakpoint.mobile}) {
    width: 344px;
  }
  @media only screen and (min-width: ${breakpoint.tablet}) {
    width: 375px;
  }
:focus{
      border: 2px solid ${colors.mainTextColor};
    }
  ::placeholder{
        color: ${colors.placeholderColor};
        font-size: 16px;
        padding: 17px;
        padding-right: auto;
        @media only screen and (min-width: ${breakpoint.tablet}){

  }
    } 
`;

export const ErrorStyles = styled.span`
    font-size: 14px;
    margin-bottom: 18px;
    color: ${colors.mainTextColor};
    outline: none;
`;

export const AcceptedStyles = styled.span`
    font-size: 14px;
    color: ${colors.mainTextColor};
    outline: none;

`;