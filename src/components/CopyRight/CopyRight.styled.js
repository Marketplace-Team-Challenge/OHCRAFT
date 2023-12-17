import { styled } from "styled-components";
import { colors } from "../../styles/colors";

export const CopyRightContainer = styled.div`
margin-top: 24px;
color: ${colors.mainTextColor};
width: 104px;
margin-left: auto;
margin-right: auto;
/* text-align: center; */
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