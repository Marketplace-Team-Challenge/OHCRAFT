import { styled } from "styled-components";
import { breakpoint } from "../../styles/breakpoints";


export const Box = styled.div`
  position: relative;
  pointer-events: none;
`;

export const Sign = styled.img`
 position: absolute;
 content: '';
transition: filter 0.3s ease;
  fill: #FEAF50;
width: 16px;
height: 16px;

`

export const ExtendedSign1 = styled(Sign)`
top: 19px;
left: 17px;
@media only screen and (min-width: ${breakpoint.secondMobile}) {
  top:28px;
left: 2px;
  }
@media only screen and (min-width: ${breakpoint.tablet}) {
top:32px;
left: 35px;
  }
`;
export const ExtendedSign2 = styled(Sign)`
top: 8px;
left: 156px;
@media only screen and (min-width: ${breakpoint.secondMobile}) {
  top: 13px;
left: 110px;
  }
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:21px;
left: 198px;
  }
`;
export const ExtendedSign3 = styled(Sign)`
top: 4px;
right: 0px;
@media only screen and (min-width: ${breakpoint.secondMobile}) {
  top: 5px;
left: 375px;
  }
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:20px;
left: 340px;
  }
`;

export const ExtendedSign4 = styled(Sign)`
top: 19px;
left: 293px;
@media only screen and (min-width: ${breakpoint.secondMobile}) {
  top: 25px;
left: 275px;
  }
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:29px;
left: 549px;
  }
`;
export const ExtendedSign5 = styled(Sign)`
top: 64px;
right: 105px;
@media only screen and (min-width: ${breakpoint.secondMobile}) {
  top: 47px;
right: 54px;
  }
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:9px;
right: 30px;
  }
`;
export const ExtendedSign6 = styled(Sign)`
top: 76px;
right:8px;
@media only screen and (min-width: ${breakpoint.secondMobile}) {
  top: 70px;
right: 121px;
  }
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:45px;
right: 245px;
  }
`;

export const ExtendedSign7 = styled(Sign)`
top: 113px;
left:247px;
@media only screen and (min-width: ${breakpoint.secondMobile}) {
  top: 59px;
left: 197px;
  }
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:68px;
right: 59px;
  }
`;
export const ExtendedSign8 = styled(Sign)`
top: 113px;
left:171px;
@media only screen and (min-width: ${breakpoint.secondMobile}) {
  top: 70px;
left: 58px;
  }
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:102px;
left: 26px;
  }
`;
export const ExtendedSign9 = styled(Sign)`
top: 114px;
left:47px;
@media only screen and (min-width: ${breakpoint.secondMobile}) {
  top: 165px;
left: 15px;
  }
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:113px;
left: 120px;
  }
`;
export const ExtendedSign10 = styled(Sign)`
top: 215px;
left:270px;
@media only screen and (min-width: ${breakpoint.secondMobile}) {
  top: 127px;
left: 384px;
  }
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:126px;
left: 480px;
  }
`;
export const ExtendedSign11 = styled(Sign)`
top: 226px;
left:58px;
@media only screen and (min-width: ${breakpoint.secondMobile}) {
  top: 164px;
left: 87px;
  }
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:107px;
right: 209px;
  }
`;
export const ExtendedSign12 = styled(Sign)`
top: 0px;
right:-18px;
@media only screen and (min-width: ${breakpoint.secondMobile}) {
  top: 172px;
right: 37px;
  }
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:106px;
right: 136px;
  }
`;
export const ExtendedSign13 = styled(Sign)`
top: 0px;
right:-18px;
@media only screen and (min-width: ${breakpoint.secondMobile}) {
  top: 260px;
right: 42px;
  }
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:106px;
right: 12px;
  }
`;
export const ExtendedSign14 = styled(Sign)`
top: 0px;
right:-18px;
@media only screen and (min-width: ${breakpoint.secondMobile}) {
  top: 318px;
right: 302px;
  }
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:174px;
left: 147px;
  }
`;
export const ExtendedSign15 = styled(Sign)`
top: 0px;
right:-18px;
@media only screen and (min-width: ${breakpoint.secondMobile}) {
  top: 330px;
right: 178px;
  }
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:187px;
right: 26px;
  }
`;
export const ExtendedSign16 = styled(Sign)`
top: 0px;
right:-18px;
@media only screen and (min-width: ${breakpoint.secondMobile}) {
  top: 335px;
right: 37px;
  }
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:209px;
left: 97px;
  }
`;
export const ExtendedSign17 = styled(Sign)`
top: 0px;
right:-18px;
@media only screen and (min-width: ${breakpoint.secondMobile}) {
  top: 347px;
right: 94px;
  }
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:187px;
left: 1px;
  }
`;
export const ExtendedSign18 = styled(Sign)`
top: 0px;
right:-18px;
@media only screen and (min-width: ${breakpoint.secondMobile}) {
  top: 350px;
right: 265px;
  }
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:239px;
right: 125px;
  }
`;
export const ExtendedSign19 = styled(Sign)`
top: 0px;
left:-18px;
@media only screen and (min-width: ${breakpoint.secondMobile}) {
  top: 345px;
left: 46px;
  }
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:260px;
right: 71px;
  }
`;
export const ExtendedSign20 = styled(Sign)`
top: 0px;
left:-18px;
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:272px;
right: 710px;
  }
`;
export const ExtendedSign21 = styled(Sign)`
bottom: 0px;
right:-18px;
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:304px;
right: 632px;
  }
`;
export const ExtendedSign22 = styled(Sign)`
bottom: 0px;
right:-18px;
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:287px;
right: 178px;
  }
`;
export const ExtendedSign23 = styled(Sign)`
bottom: 0px;
right:-18px;
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:292px;
right: 33px;
  }
`;
export const ExtendedSign24 = styled(Sign)`
bottom: 0px;
right:-18px;
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:344px;
right: 106px;
  }
`;
export const ExtendedSign25 = styled(Sign)`
bottom: 0px;
right:-18px;
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:349px;
right: 467px;
  }
`;
export const ExtendedSign26 = styled(Sign)`
bottom: 0px;
right:-18px;
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:367px;
right: 586px;
  }
`;
export const ExtendedSign27 = styled(Sign)`
bottom: 0px;
right:-18px;
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:374px;
right: 330px;
  }
`;
export const ExtendedSign28 = styled(Sign)`
bottom: 0px;
left:-18px;
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:378px;
left: 73px;
  }
`;
export const ExtendedSign29 = styled(Sign)`
bottom: 0px;
left:-18px;
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:384px;
left: 309px;
  }
`;
export const ExtendedSign30 = styled(Sign)`
bottom: 0px;
left:-18px;
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:382px;
left: 564px;
  }
`;
export const ExtendedSign31 = styled(Sign)`
bottom: 0px;
left:-18px;
    @media only screen and (min-width: ${breakpoint.tablet}) {
  top:382px;
left: 688px;
  }
`;