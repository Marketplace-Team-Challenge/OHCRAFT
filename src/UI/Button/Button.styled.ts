import { css, styled } from "styled-components";
import { colors } from "../../styles/colors";
import { breakpoint } from "../../styles/breakpoints";

const baseButtonStyles = css`
margin: 0;
width: 100%;
font-weight: 600;
font-size: 20px;
line-height: auto;
cursor: pointer;
transition: 0.5s;
border-radius: 15px;
border: 1px solid ${colors.btnActiveColor};
padding: 16px;
cursor: pointer;
transition: 0.5s;
  @media only screen and (min-width: ${breakpoint.tablet}) {
    padding: 22px;
  }
  @media only screen and (min-width: ${breakpoint.desktop}) {
    padding: 19px;
  }
`;

export const ButtonActive = styled.button`
 ${baseButtonStyles}
  color: ${colors.whiteColor};
  background-color: ${colors.btnActiveColor};
`
export const ButtonHover = styled.button`
${baseButtonStyles}
color: ${colors.whiteColor};
background-color: ${colors.hoverBtnColor};
box-shadow: 0px 5px 16px rgba(151, 100, 39, 0.7);
`
export const ButtonDisabled = styled.button`
${baseButtonStyles}
color: ${colors.whiteColor};
background-color: ${colors.grayColor};
`
export const ButtonPassive = styled.button`
${baseButtonStyles}
color: ${colors.mainTextColor};
background-color: transparent;
border: 1px solid ${colors.mainTextColor};
`