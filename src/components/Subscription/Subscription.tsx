import { SubscriptionSection, SubscriptionSubText, SubscriptionText, SubscriptionTextContainer, SubscriptionWrapper } from "./Subscription.styled";

const Subscription = () => {
    return (
        <SubscriptionSection>
            <SubscriptionWrapper>
                <SubscriptionTextContainer>
                    <SubscriptionText>Хочеш першим отримувати актуальні новини від нас?</SubscriptionText>
                <SubscriptionSubText>Залиш свою електронну пошту</SubscriptionSubText>
                </SubscriptionTextContainer>
                

            </SubscriptionWrapper>
        </SubscriptionSection>
    )
}
export default Subscription;