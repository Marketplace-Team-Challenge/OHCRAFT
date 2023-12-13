import { SocialFollow } from "../Socials/Socials";
import { FooterSection, FooterWrapper } from "./Footer.styled";
import FooterNav from "./FooterNav";

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