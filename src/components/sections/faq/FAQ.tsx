
import { DecorationCurveIcon } from '../../../constants/icons/DecorationCurveIcon';
import * as Styled from './FAQ.styled';
import { FAQQuestionsList } from './FAQQuestionsList';
import FAQImg from '../../IMG/images/FAQ.png';
import { ButtonFAQSizes, ButtonText, constants } from '../../../constants/constants';
import { Button } from '../../Button/Button';
import DecorationIconDesktop from "../../IMG/icons/decoration.svg";
import DecorationIconTablet from "../../IMG/icons/decorationTablet.svg";
import { StyleSheetManager } from 'styled-components';

export const FAQ = () => {
    return (
        <Styled.FAQSection>

            <Styled.FAQDecorationWrapper>
            <Styled.FAQDecorationContainer>
                <StyleSheetManager shouldForwardProp={(prop: string) => prop !== 'desktop' && prop !== 'tablet'}>
                    <Styled.FAQDecoration desktop={DecorationIconDesktop} tablet={DecorationIconTablet}></Styled.FAQDecoration>
                </StyleSheetManager>
            </Styled.FAQDecorationContainer>
            </Styled.FAQDecorationWrapper>

            <Styled.FAQWrapper>

            <Styled.FAQTitleContainer>
            <Styled.FAQTitle>
            {constants.FAQ.FAQHeader}
            </Styled.FAQTitle>
            <Styled.FAQIconContainer>
            <DecorationCurveIcon />
            </Styled.FAQIconContainer>
            </Styled.FAQTitleContainer>

            <Styled.FAQContentWrapper>

            <Styled.FAQContentContainer>
            
            <Styled.FAQListImgContainer>
            <FAQQuestionsList />
            <Styled.FAQImgContainer>
            <Styled.FAQImg src={FAQImg} alt={constants.FAQ.FAQAltText}/>
            </Styled.FAQImgContainer>
            </Styled.FAQListImgContainer>
            <Button type="button" size={ButtonFAQSizes}>{ButtonText.FAQ}</Button>
            
            </Styled.FAQContentContainer>

            </Styled.FAQContentWrapper>

            </Styled.FAQWrapper>
            
        </Styled.FAQSection>
    );
}