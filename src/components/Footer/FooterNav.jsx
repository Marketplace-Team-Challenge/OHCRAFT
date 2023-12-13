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
                <FooterNavListItem><FooterNavLink to="/support">
                Служба підтримки
                </FooterNavLink></FooterNavListItem>
                <FooterNavListItem><FooterNavLink to="/return">
                Обмін та повернення товару
                </FooterNavLink></FooterNavListItem>
                <FooterNavListItem><FooterNavLink to="/politics">
                Політика конфіденційності
                </FooterNavLink></FooterNavListItem>
                <FooterNavListItem><FooterNavLink to="/agreement">
                Публічна оферта
                </FooterNavLink></FooterNavListItem>
                </FooterNavList>
       </FooterNavContainer>
    )
}
export default FooterNav;