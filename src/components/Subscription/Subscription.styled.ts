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
  max-width: 375px;
  }
`

export const SubscriptionTextContainer = styled.div`
width: 230px;
height: auto;
text-align: center;
margin-left: auto;
margin-right: auto;
`
export const SubscriptionText = styled.p`
font-size: 16px;
line-height: 145%;
font-weight: 600;
text-align: center;
margin-bottom: 12px;
`

export const SubscriptionSubText = styled.p`
font-size: 12px;
margin-bottom: 20px;
`