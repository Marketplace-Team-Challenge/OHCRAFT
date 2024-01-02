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
  position: relative;
    height: 883px;
  }
`;

export const FAQWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: auto;
padding: 40px 17px 62px 19px;

@media screen and (min-width: ${breakpoint.secondMobile}) {
  padding: 48px 28.5px 55px 25.5px;
  }
  @media screen and (min-width: ${breakpoint.tablet}) {
    padding: 69px 31px 92px 32px;
  }
@media screen and (min-width: ${breakpoint.desktop}) {
  padding: 100px 76px 123px 80px;
  }
`;

export const FAQTitleContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 15.5px;
margin-bottom: 32.5px;

@media screen and (min-width: ${breakpoint.secondMobile}) {
  margin-bottom: 28.5px;
  }
  @media screen and (min-width: ${breakpoint.tablet}) {
    margin-bottom: 51px;
  }
@media screen and (min-width: ${breakpoint.desktop}) {
  margin-bottom: 36px;
  }
`

export const FAQTitle = styled.h2`

@media screen and (min-width: ${breakpoint.mobile}) {
  font-weight: 600;
  font-size: 20px;
  line-height: 27.24px;
  color: ${colors.mainTextColor};
  
  }
/* @media screen and (min-width: ${breakpoint.secondMobile}) {
    
  } */
  @media screen and (min-width: ${breakpoint.tablet}) {
    font-size: 28px;
    line-height: 38.14px;
   
  }
@media screen and (min-width: ${breakpoint.desktop}) {
    font-size: 32px;
    line-height: 43.58px;
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

export const FAQContentWrapper = styled.div`

@media screen and (min-width: ${breakpoint.mobile}) {

  }
// @media screen and (min-width: ${breakpoint.secondMobile}) {
    
//   }
  @media screen and (min-width: ${breakpoint.tablet}) {

   
  }
@media screen and (min-width: ${breakpoint.desktop}) {

    
  }
`

export const FAQContentContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

/* @media screen and (min-width: ${breakpoint.mobile}) {

  
  } */
// @media screen and (min-width: ${breakpoint.secondMobile}) {
    
//   }
  /* @media screen and (min-width: ${breakpoint.tablet}) {
 
   
  }
@media screen and (min-width: ${breakpoint.desktop}) {
    
  } */
`

export const FAQImgContainer = styled.div`
width: 334px;
height: 208px;
margin-bottom: 20px;

  @media screen and (min-width: ${breakpoint.secondMobile}) {
    width: 427px;
  }
  @media screen and (min-width: ${breakpoint.tablet}) {
    width: 697px;
    height: 434px;
    margin-bottom: 40px;
   
  }
@media screen and (min-width: ${breakpoint.desktop}) {
    width: 481px;
    height: 404px;
    margin-bottom: 0;
  }
`
export const FAQImg = styled.img`
width: 100%;
height: 100%;

/* @media screen and (min-width: ${breakpoint.mobile}) {

  
  } */
// @media screen and (min-width: ${breakpoint.secondMobile}) {
    
//   }
  /* @media screen and (min-width: ${breakpoint.tablet}) {
 
   
  }
@media screen and (min-width: ${breakpoint.desktop}) {
 
    
  } */
`
export const FAQListImgContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;

/* @media screen and (min-width: ${breakpoint.mobile}) {

  
  } */
// @media screen and (min-width: ${breakpoint.secondMobile}) {
    
//   }
  /* @media screen and (min-width: ${breakpoint.tablet}) {
 
   
  } */
@media screen and (min-width: ${breakpoint.desktop}) {
  flex-direction: row;
  gap: 198px;
  margin-bottom: 70.5px;
    
  }
`



