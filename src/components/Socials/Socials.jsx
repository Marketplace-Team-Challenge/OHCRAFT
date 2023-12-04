import facebookIcon from '../IMG/icons/facebook.svg';
import instagramIcon from '../IMG/icons/instagram.svg';
import pinterestIcon from '../IMG/icons/pinterest.svg';
import { Link} from "react-router-dom";
import { Deco, IconLogo, IconWrapper, LogoContainer, SocialContainer, SocialIcon} from './Socials.styled';
import iconLogo from '../IMG/icons/logoName.png';
import decoration from '../IMG/icons/decorationCurve.png';

export const SocialFollow = () => {
    return (
      <SocialContainer >
         <Link to="/" end>
        <LogoContainer>
            <IconLogo src={iconLogo} alt="logo" />
            <Deco src={decoration} alt="logo"/>
          </LogoContainer>
        </Link>
        <IconWrapper>
        <Link aria-label="facebook link"  to="https://www.facebook.com"
        className="facebook social" target = "_blank">
         <SocialIcon src={facebookIcon} alt="Facebook" style={{ width: '32px', height: '32px' }} />
      </Link>
      <Link aria-label="instagram link"  to="https://www.instagram.com"
        className="instagram social" target = "_blank">
        <SocialIcon src={instagramIcon} alt="Instagram" style={{ width: '32px', height: '32px' }} />
        </Link>
        <Link aria-label="pinterest link"  to="https://www.pinterest.com/"
        className="pinterest social" target = "_blank">
        <SocialIcon src={pinterestIcon} alt="Pinterest" style={{ width: '32px', height: '32px' }} />
      </Link>
        </IconWrapper>
            
        </SocialContainer>
    )
}