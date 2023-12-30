import { CopyRight } from "../CopyRight/CopyRight";
import { SocialFollow } from "../Socials/Socials";
import { FooterNavWrapper, FooterSection, FooterWrapper } from "./Footer.styled";
import FooterNav from "./FooterNav";
import FooterNavAdd from "./FooterNavAdd";

const Footer = () => {
    return (
        <FooterSection>
            <FooterWrapper>
                <SocialFollow />
                <FooterNav />
            </FooterWrapper>
            <FooterNavWrapper>
                <FooterNavAdd/>
            </FooterNavWrapper>
            <CopyRight/>
        </FooterSection>
    )
}
export default Footer;