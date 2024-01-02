import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { breakpoint } from "../../../styles/breakpoints";


export const FAQListContainer = styled.ul`
display: flex;
flex-direction: column;
gap: 16px;
`
export const FAQListItemsContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
gap: 40px;
// flex-direction: column;
// margin-bottom: 20px;
// @media screen and (min-width: ${breakpoint.mobile}) {
//   }
`
export const FAQListItem = styled.li`


width: 264px;
font-size: 16px;
font-weight: 400;
line-height: 21.79px;
color: ${colors.mainTextColor};

  @media screen and (min-width: ${breakpoint.tablet}) {
    width: 459px;
    font-size: 24px;
    line-height: 39.71px;

   
  }
`
export const FAQListIconContainer = styled.div`
width: 36px;
height: 36px;

  @media screen and (min-width: ${breakpoint.tablet}) {
    width: 60px;
    height: 60px;

   
  }
`

