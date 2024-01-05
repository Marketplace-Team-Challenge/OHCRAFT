import { styled } from "styled-components";
import { colors } from "../../styles/colors";
import { breakpoint } from "../../styles/breakpoints";

export const CopyRightContainer = styled.div`
margin-top: 24px;
color: ${colors.mainTextColor};
width: fit-content;
margin-left: auto;
margin-right: auto;
/* text-align: center; */
@media screen and (min-width: ${breakpoint.secondMobile}) {
    /* padding: 52px 43px 24px 25px; */
    margin-top: 16px;
    /* width: 104px; */
  }
  @media screen and (min-width: ${breakpoint.desktop}) {
width: 100%;
padding-top: 32px;
border-top: 1px solid ${colors.accentColor};
margin-top: 0;
  }
`

export const Brand = styled.p`
margin-bottom: 4px;
/* text-transform: uppercase; */
font-size: 12px;
@media screen and (min-width: ${breakpoint.tablet}) {
font-size: 16px;
  }
> span{
    margin-right: 12px;
}
 @media screen and (min-width: ${breakpoint.desktop}) {
width: fit-content;
margin-left: auto;
margin-right: auto;
  }
`

export const RightsProtection = styled.p`
font-size: 8px;
@media screen and (min-width: ${breakpoint.tablet}) {
font-size: 12px;
  }
   @media screen and (min-width: ${breakpoint.desktop}) {
width: fit-content;
margin-left: auto;
margin-right: auto;
  }
`