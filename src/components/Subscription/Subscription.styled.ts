import { styled } from "styled-components";
import { colors } from "../../styles/colors";

export const SubscriptionSection = styled.section`
width: 100%;
height: auto;
background-color:  ${colors.menuLayoutColor};

outline: 1px solid red;
`

export const SubscriptionWrapper = styled.div`
/* outline: 1px solid red; */
margin: 95px 15px 17px 15px;
text-align: center;
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
font-weight: medium;
text-align: center;
margin-bottom: 12px;
`

export const SubscriptionSubText = styled.p`
font-size: 12px;
margin-bottom: 20px;
`