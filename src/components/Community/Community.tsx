import ButtonMain from '../../UI/Button/Button';
import * as Styled from './Community.styled';


export const Community = () => {

    return (
        <Styled.CommunitySection>
            <Styled.CommunityTitle>Спільнота</Styled.CommunityTitle>
            <Styled.DecoImg src='/star.png'></Styled.DecoImg>
            <Styled.DecoImgSecond src='/star.png'></Styled.DecoImgSecond>
            <Styled.CommunityContainer>
                <Styled.CommunityText>
                    Бажаєш приєднатися до команди майстрів у нашому ком’юніті? 
                </Styled.CommunityText>
                <Styled.CommunitySubText>Мерщій додавай свою роботу!</Styled.CommunitySubText>
            <ButtonMain type="submit" buttonName="Додати роботу" buttonStyle='active'/>
            </Styled.CommunityContainer>
             
       </Styled.CommunitySection>
    )
}