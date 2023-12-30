
import { DecorationCurveIcon } from '../../../constants/icons/DecorationCurveIcon';
import * as Styled from './FAQ.styled';

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
            </Styled.FAQWrapper>
            
        </Styled.FAQSection>
    );
}