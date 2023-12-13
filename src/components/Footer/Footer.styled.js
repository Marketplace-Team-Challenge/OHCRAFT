import styled from "styled-components";
import { colors } from "../../styles/colors";
import { breakpoint } from '../../styles/breakpoints';
import { NavLink } from "react-router-dom";

export const FooterSection = styled.footer`
    width: 100%;
    height: auto;
    background-color:  ${colors.sectionLayoutColor};

     /* @media screen and (min-width: ${breakpoint.secondMobile}) {
    width: 480px;
  }
  @media screen and (min-width: ${breakpoint.tablet}) {
    width: 768px;
  }
  @media screen and (min-width: ${breakpoint.desktop}) {
    width: 1440px;
  } */
`;

export const FooterNavContainer = styled.div`

`


export const FooterWrapper = styled.div`
margin: 25px 20px;
    display: flex;
    justify-content: space-between;
@media screen and (min-width: ${breakpoint.secondMobile}) {
    margin: 52px 43px 24px 25px;
  }
  @media screen and (min-width: ${breakpoint.tablet}) {
    margin: 40px 109px 36px 32px;
  }
@media screen and (min-width: ${breakpoint.desktop}) {
    margin: 99px 84px 32px 84px;
  }
`

export const FooterNavList = styled.ul`

  @media screen and (min-width: 768px) {

  }
`;
export const FooterNavListItem = styled.li`

  @media screen and (min-width: 768px) {

  }
`;

export const FooterNavLink = styled(NavLink)`
  text-decoration: none;
  white-space: nowrap;
  color: ${colors.mainTextColor};
  &:hover,   &:active  {
  }
`;