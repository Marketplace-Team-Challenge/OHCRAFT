import { constants } from '../../../constants/constants';
import { PlusIcon } from '../../../constants/icons/PlusIcon';
import * as Styled from './FAQQuestionsList.styled';

export const FAQQuestionsList = () => {
    return (
        <Styled.FAQListContainer>

            {constants.FAQ.FAQList.map((item) => {
                return (
                    <Styled.FAQListItemsContainer key={item.question}>
                    <Styled.FAQListItem key={item.question}>{item.question}</Styled.FAQListItem>
                    
                    {/* TODO: add button component */}
                    <Styled.FAQListIconContainer>
                    <PlusIcon />
                    </Styled.FAQListIconContainer>
                    </Styled.FAQListItemsContainer>

                );

            })}
            
                
        </Styled.FAQListContainer>
    );
}


