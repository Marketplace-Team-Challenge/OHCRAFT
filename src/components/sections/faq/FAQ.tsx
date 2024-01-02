
import { DecorationCurveIcon } from '../../../constants/icons/DecorationCurveIcon';
import * as Styled from './FAQ.styled';
import { FAQQuestionsList } from './FAQQuestionsList';
import FAQImg from '../../IMG/images/FAQ.png';
import { ButtonFAQSizes, ButtonText, FAQAltText } from '../../../constants/constants';
import { Button } from '../../Button/Button';

export const FAQ = () => {
    return (
        <Styled.FAQSection>

            <Styled.FAQWrapper>
            
            <Styled.FAQTitleContainer>
            <Styled.FAQTitle>
            FAQ
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
            <Styled.FAQImg src={FAQImg} alt={FAQAltText}/>
            </Styled.FAQImgContainer>
            </Styled.FAQListImgContainer>
            <Button type="button" size={ButtonFAQSizes}>{ButtonText.FAQ}</Button>
            

            </Styled.FAQContentContainer>

            </Styled.FAQContentWrapper>

            </Styled.FAQWrapper>
            
        </Styled.FAQSection>
    );
}