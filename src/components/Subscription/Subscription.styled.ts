import { styled } from "styled-components";
import { colors } from "../../styles/colors";
import { breakpoint } from "../../styles/breakpoints";

export const SubscriptionSection = styled.section`
width: 100%;
height: auto;
background-color:  ${colors.menuLayoutColor};
position: relative;
`

export const SubscriptionWrapper = styled.div`
padding: 95px 15px 56px 15px;
text-align: center;
max-width: 344px;
margin-left: auto;
margin-right: auto;
z-index: 1;
@media only screen and (min-width: ${breakpoint.tablet}) {
  min-width: 375px;
  }
  @media only screen and (min-width: ${breakpoint.desktop}) {
    display: flex;
    align-items: center;
    max-width: 1440px;
  }
`
export const SubscriptionTitle = styled.h2`
display: none;
`

export const SubscriptionTextContainer = styled.div`
width: 230px;
height: auto;
text-align: center;
margin-left: auto;
margin-right: auto;
@media only screen and (min-width: ${breakpoint.tablet}) {
  width: 282px;
  }
  @media only screen and (min-width: ${breakpoint.desktop}) {
  width: 343px;
  margin-right: 87px;
  margin-left: 80px;
  }
`
export const SubscriptionText = styled.p`
font-size: 16px;
line-height: 145%;
font-weight: 600;
text-align: center;
margin-bottom: 12px;
@media only screen and (min-width: ${breakpoint.tablet}) {
  font-size: 20px;
  }
  @media only screen and (min-width: ${breakpoint.desktop}) {
  font-size: 24px;
  width: inherit;
  }
`

export const SubscriptionSubText = styled.p`
font-size: 12px;
margin-bottom: 20px;
@media only screen and (min-width: ${breakpoint.tablet}) {
  font-size: 16px;
  }
    @media only screen and (min-width: ${breakpoint.desktop}) {
  font-size: 20px;
  }
`