import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { breakpoint } from "../../../styles/breakpoints";

export const FAQSection = styled.section`
background:  ${colors.sectionLayoutColor};
@media screen and (min-width: ${breakpoint.mobile}) {
    height: 709px;
  }
@media screen and (min-width: ${breakpoint.secondMobile}) {
    height: 706px;
  }
  @media screen and (min-width: ${breakpoint.tablet}) {
    height: 1180px;
  }
@media screen and (min-width: ${breakpoint.desktop}) {
    height: 883px;
  }
`;

export const FAQWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
height: auto;
@media screen and (min-width: ${breakpoint.mobile}) {
  padding: 40px 17px 62px 19px;
    
  }
@media screen and (min-width: ${breakpoint.secondMobile}) {
    
  }
  @media screen and (min-width: ${breakpoint.tablet}) {
   
  }
@media screen and (min-width: ${breakpoint.desktop}) {
    
  }
`;

export const FAQTitleContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 15.5px;
@media screen and (min-width: ${breakpoint.mobile}) {
  
  }
@media screen and (min-width: ${breakpoint.secondMobile}) {
    
  }
  @media screen and (min-width: ${breakpoint.tablet}) {
   
  }
@media screen and (min-width: ${breakpoint.desktop}) {
    
  }
`

export const FAQTitle = styled.h2`

@media screen and (min-width: ${breakpoint.mobile}) {
  font-weight: 600;
  font-size: 20px;
  line-height: 27.24px;
  color: ${colors.mainTextColor};
  
  }
@media screen and (min-width: ${breakpoint.secondMobile}) {
    
  }
  @media screen and (min-width: ${breakpoint.tablet}) {
   
  }
@media screen and (min-width: ${breakpoint.desktop}) {
    
  }
`;

export const FAQIconContainer = styled.div`
@media screen and (min-width: ${breakpoint.mobile}) {
  width: 158px;
  height: 25px;
  
  }
// @media screen and (min-width: ${breakpoint.secondMobile}) {
    
//   }
  @media screen and (min-width: ${breakpoint.tablet}) {
    width: 206px;
    height: 33.5px;
   
  }
@media screen and (min-width: ${breakpoint.desktop}) {
  width: 235px;
  height: 34px;
    
  }
`



