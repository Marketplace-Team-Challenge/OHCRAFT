import { styled } from "styled-components";
import { colors } from "../../styles/colors";
import { breakpoint } from "../../styles/breakpoints";

export const CommunitySection = styled.section`
width: 100%;
height: auto;
background-color:  ${colors.menuLayoutColor};
position: relative;
outline: 1px solid red;
`
export const CommunityTitle = styled.h2`
display: none;
`

export const CommunityContainer = styled.div`
padding: 115px 15px 123px 15px;
/* text-align: center; */
max-width: 344px;
margin-left: auto;
margin-right: auto;
z-index: 1;
@media only screen and (min-width: ${breakpoint.tablet}) {
  min-width: 474px;
  }
  @media only screen and (min-width: ${breakpoint.desktop}) {
    display: flex;
    align-items: center;
    max-width: 1440px;
  }
`

export const CommunityText = styled.p`
font-size: 20px;
line-height: 165%;
font-weight: 600;
margin-bottom: 16px;
@media only screen and (min-width: ${breakpoint.tablet}) {
  font-size: 28px;
  line-height: 163%;
  margin-bottom: 20px;
  }
  @media only screen and (min-width: ${breakpoint.desktop}) {
  font-size: 32px;
  width: inherit;
  }
`

export const CommunitySubText = styled.p`
font-size: 16px;
line-height: 165%;
font-weight: 400;
margin-bottom: 20px;
@media only screen and (min-width: ${breakpoint.tablet}) {
  font-size: 24px;
  margin-bottom: 48px;
  }
`