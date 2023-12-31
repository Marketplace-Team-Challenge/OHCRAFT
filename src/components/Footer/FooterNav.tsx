import { FooterNavContainer, FooterNavLink, FooterNavList, FooterNavListItem, } from "./Footer.styled";

const FooterNav = () => {
    return (
        <FooterNavContainer>
            <FooterNavList>
                <FooterNavListItem>
                    <FooterNavLink to="/about">
                Про нас
                </FooterNavLink>
                </FooterNavListItem>
                <FooterNavListItem><FooterNavLink to="/goods">
                Усі товари
                </FooterNavLink></FooterNavListItem>
                <FooterNavListItem><FooterNavLink to="/blog">
                Блог
                </FooterNavLink></FooterNavListItem>
            </FooterNavList>
       </FooterNavContainer>
    )
}
export default FooterNav;