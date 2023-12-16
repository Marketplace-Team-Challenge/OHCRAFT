import { FooterNavLink, FooterNavListAdditional, FooterNavListItem, } from "./Footer.styled";

const FooterNavAdd = () => {
    return (
        <>          
                <FooterNavListAdditional>
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
                </FooterNavListAdditional>
       </>
    )
}
export default FooterNavAdd;