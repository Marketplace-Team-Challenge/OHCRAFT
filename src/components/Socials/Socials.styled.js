import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { colors } from "../../styles/colors";
import { breakpoint } from '../../styles/breakpoints';

export const SocialContainer = styled.div`
width: 140px;
@media screen and (min-width: ${breakpoint.secondMobile}) {
    width: 190px;
  }
 
`;

export const IconWrapper = styled.div`
display: flex;
justify-content: space-between;
margin-top: 8px;
`

export const Link = styled(NavLink)`
 text-decoration: none;
  /* color: inherit; */
  display: inline-block;
  &:hover svg path {
    fill: red;
  }
`;
export const LogoContainer = styled.div`
color: ${colors.accentColor};
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
width: 140px;
@media screen and (min-width: ${breakpoint.secondMobile}) {
    width: 173px;
  }
`

export const SocialIcon = styled.img`
  width: 32px;
  height: 32px;
  transition: filter 0.3s ease;
 color: red;
  stroke: 1px solid red;
`;
export const IconLogo = styled.img`
  width: 60px;
  height: auto;
@media screen and (min-width: ${breakpoint.secondMobile}) {
    width: 98px;
  }
`;

export const Deco = styled.img`
  width: 128px;
  height: auto;
@media screen and (min-width: ${breakpoint.secondMobile}) {
    width: 173px;
  }
`;