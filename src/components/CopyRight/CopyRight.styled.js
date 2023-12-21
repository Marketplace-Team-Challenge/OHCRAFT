import { styled } from "styled-components";
import { colors } from "../../styles/colors";
import { breakpoint } from "../../styles/breakpoints";

export const CopyRightContainer = styled.div`
margin-top: 24px;
color: ${colors.mainTextColor};
width: 104px;
margin-left: auto;
margin-right: auto;
/* text-align: center; */
@media screen and (min-width: ${breakpoint.secondMobile}) {
    /* padding: 52px 43px 24px 25px; */
    margin-top: 16px;
    width: 103px;
  }
`

export const Brand = styled.p`
margin-bottom: 4px;
/* text-transform: uppercase; */
font-size: 12px;
> span{
    margin-right: 12px;
}
`

export const RightsProtection = styled.p`
font-size: 8px;
`