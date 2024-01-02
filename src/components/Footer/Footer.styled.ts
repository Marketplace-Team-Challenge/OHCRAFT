import styled from "styled-components";
import { colors } from "../../styles/colors";
import { breakpoint } from '../../styles/breakpoints';
import { NavLink } from "react-router-dom";

export const FooterSection = styled.footer`
    width: 100%;
    height: auto;
    background-color:  ${colors.sectionLayoutColor};
    padding: 25px 20px 27px 19px;
    font-size: 12px;
@media screen and (min-width: ${breakpoint.secondMobile}) {
    padding: 57px 43px 24px 25px;
    font-size: 14px;
  }
  @media screen and (min-width: ${breakpoint.tablet}) {
    padding: 40px 109px 36px 32px;
    font-size: 20px;
  }
@media screen and (min-width: ${breakpoint.desktop}) {
    padding: 99px 84px 32px 84px;
  }
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
/* display: flex;
flex-direction: column; */
 /* flex-grow: 1;  */
margin-left: 40px;
@media screen and (min-width: ${breakpoint.secondMobile}) {
    margin-left: 75px;
  }
`
export const FooterNavWrapper = styled.div`

display: grid;
  grid-template-columns: repeat(2, 1fr); 
  grid-gap:24px; 
  /* margin-bottom: 24px; */
  border-bottom: 1px solid ${colors.accentColor};
`

export const FooterWrapper = styled.div`
/* padding: 25px 20px; */
    /* margin-bottom: 36px; */
    display: flex;
    /* justify-content: flex-end; */
     /* float: left; */
     /* justify-content: space-between; */
    /* flex-direction: column; */
    /* margin-left: -15px;
  margin-right: -15px;
  -webkit-columns: 2;
  columns: auto 2;
  -webkit-column-gap: 20px;
  column-gap: 20px; */
@media screen and (min-width: ${breakpoint.secondMobile}) {
    /* padding: 52px 43px 24px 25px; */
    margin-bottom: 36px;
  }
  @media screen and (min-width: ${breakpoint.tablet}) {
    /* padding: 40px 109px 36px 32px; */
  }
@media screen and (min-width: ${breakpoint.desktop}) {
    /* padding: 99px 84px 32px 84px; */
  }
`

export const FooterNavList = styled.ul`
 /* margin-left: -15px;
  margin-right: -15px;
  -webkit-columns: 2;
  columns: auto 2;
  -webkit-column-gap: 20px;
  column-gap: 20px; */
  /* display: flex;
  flex-wrap: wrap;
  max-width: 50%; */
   flex-grow: 1;
  @media screen and (min-width: ${breakpoint.tablet}) {

  }
`;

export const FooterNavListAdditional = styled.ul`
 flex-grow: 1;
  -webkit-columns: 2;
  columns: auto 2;
  -webkit-column-gap: 20px;
  column-gap: 20px;
  @media screen and (min-width: ${breakpoint.secondMobile}) {
    -webkit-column-gap: 75px;
  column-gap: 75px;
  }
`

export const FooterNavListItem = styled.li`
/* flex-basis: 50%; */
margin-bottom: 24px;

  @media screen and (min-width: ${breakpoint.secondMobile}) {

  }
`;

export const FooterNavLink = styled(NavLink)`
  text-decoration: none;
  white-space: nowrap;
  display: block;
  /* text-align: right; */
  color: ${colors.mainTextColor};
  &:hover,   &:active  {
  }
`;