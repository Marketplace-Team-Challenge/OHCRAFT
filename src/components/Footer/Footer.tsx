import { CopyRight } from "../CopyRight/CopyRight";
import { SocialFollow } from "../Socials/Socials";
import * as Styled from "./Footer.styled";
import FooterNav from "./FooterNav";
import FooterNavAdd from "./FooterNavAdd";

const Footer = () => {
    return (
        <Styled.FooterSection>
            <Styled.FooterWrapper>
                <SocialFollow />
                <FooterNav />
            </Styled.FooterWrapper>
            <Styled.FooterNavWrapper>
                <FooterNavAdd/>
            </Styled.FooterNavWrapper>
            <CopyRight/>
        </Styled.FooterSection>
    )
}
export default Footer;