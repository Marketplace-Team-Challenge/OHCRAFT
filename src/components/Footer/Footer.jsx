import { SocialFollow } from "../Socials/Socials";
import { FooterNav, FooterSection, FooterWrapper } from "./Footer.styled";

const Footer = () => {
    return (
        <FooterSection>
            <FooterWrapper>
                <SocialFollow />
                 <FooterNav/>
            </FooterWrapper>
            
        </FooterSection>
    )
}
export default Footer;