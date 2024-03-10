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
export const DecoImg = styled.img`
width: 54px;
height: 54px;
position: absolute;
top: 27px;
right: 0px;
@media only screen and (min-width: ${breakpoint.secondMobile}) {
top: 33px;
right: 31px;
}
@media only screen and (min-width: ${breakpoint.tablet}) {
  width: 114px;
  height: 114px;
top: 30px;
right: 56px;
}
@media only screen and (min-width: ${breakpoint.desktop}) {
  width: 200px;
  height: 200px;
top: 30px;
right: 60px;
}
`

export const DecoImgSecond = styled.img`
width: 54px;
height: 54px;
position: absolute;
bottom: 21px;
left: 0px;
@media only screen and (min-width: ${breakpoint.secondMobile}) {
bottom: 9px;
left: 7px;
}
@media only screen and (min-width: ${breakpoint.tablet}) {
  width: 114px;
  height: 114px;
bottom: 36px;
left: -20px;
}
@media only screen and (min-width: ${breakpoint.desktop}) {
  width: 200px;
  height: 200px;
bottom: 57px;
left: 41px;
}
`
export const CommunityContainer = styled.div`
padding-top: 115px;
padding-bottom: 123px;
/* text-align: center; */
max-width: 344px;
margin-left: auto;
margin-right: auto;
z-index: 1;
@media only screen and (min-width: ${breakpoint.tablet}) {
  min-width: 474px;
  padding: 185px 0px;
  /* padding-bottom: 0; */
  > button{
    font-size: 24px;
  }
  }
  @media only screen and (min-width: ${breakpoint.desktop}) {
    /* display: flex;
    align-items: center; */
    min-width: 542px;
     padding: 90px 0px;
       > button{
   margin-left: 0;
   padding: 19px 115px;
  }
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