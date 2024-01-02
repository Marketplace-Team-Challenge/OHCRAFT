import { FAQList } from '../../../constants/constants';
import { PlusIcon } from '../../../constants/icons/PlusIcon';
import * as Styled from './FAQQuestionsList.styled';

export const FAQQuestionsList = () => {
    return (
        <Styled.FAQListContainer>

            {FAQList.map((item) => {
                return (
                    <Styled.FAQListItemsContainer>
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


