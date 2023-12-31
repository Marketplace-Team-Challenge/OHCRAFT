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
    padding: 52px 109px 36px 32px;
    font-size: 20px;
  }
@media screen and (min-width: ${breakpoint.desktop}) {
    padding: 99px 84px 32px 84px;
    display: flex;
    flex-wrap: wrap;
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
@media screen and (min-width: ${breakpoint.tablet}) {
    margin-left: 186px;
  }
  @media screen and (min-width: ${breakpoint.desktop}) {
    margin-left: 143px;
  }
`
export const FooterNavWrapper = styled.div`

display: grid;
  grid-template-columns: repeat(1, 0fr); 
  grid-gap:24px; 
  /* margin-bottom: 24px; */
  border-bottom: 1px solid ${colors.accentColor};
  @media screen and (min-width: ${breakpoint.desktop}) {
    border-bottom: 0;
  }
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
    margin-bottom: 32px;
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
    @media screen and (min-width: ${breakpoint.tablet}) {
  -webkit-column-gap: 110px;
  column-gap: 110px;
  margin-bottom: 36px;
  }
    @media screen and (min-width: ${breakpoint.desktop}) {
  margin-bottom: 32px;
  }
`

export const FooterNavListItem = styled.li`
/* flex-basis: 50%; */
margin-bottom: 24px;
width: 158px;
&.item {
    width: 138px; 
  }
  @media screen and (min-width: ${breakpoint.secondMobile}) {
width: 185px;
&.item {
    width: 152px; 
  }
  }
  @media screen and (min-width: ${breakpoint.tablet}) {
margin-bottom: 20px;
font-size: 20px;
width: 263px;
&.item {
    width: 218px; 
  }
  }
   @media screen and (min-width: ${breakpoint.desktop}) {
margin-bottom: 24px;
  }
`;

export const FooterNavLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  color: ${colors.mainTextColor};
  width: 100%; 
  box-sizing: border-box;
  color: ${colors.mainTextColor};
  &:hover,   &:active  {
  }
`;