import { useState } from "react";
import InputMain from "../../UI/Input/Input";
import { SubscriptionSection, SubscriptionSubText, SubscriptionText, SubscriptionTextContainer, SubscriptionWrapper } from "./Subscription.styled";
import ButtonMain from "../../UI/Button/Button";

const Subscription = () => {
     const [status, setStatus] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<{ isValid: boolean; message: string }>({ isValid: true, message: '' });

       const handleEmailChange = (value: string, error: { isValid: boolean; message: string }): void => {
    setEmail(value);
    setEmailError(error);
  };
    return (
        <SubscriptionSection>
            <SubscriptionWrapper>
                <SubscriptionTextContainer>
                    <SubscriptionText>Хочеш першим отримувати актуальні новини від нас?</SubscriptionText>
                <SubscriptionSubText>Залиш свою електронну пошту</SubscriptionSubText>
                </SubscriptionTextContainer>
                

            <InputMain
            aria-label="Your email address"
          name="email_address"
          placeholder="Your email address"
          type="email"
          onChange={(e) => {
            handleEmailChange(e.value, e.error);
          }}
          value={email}
          error={emailError}
          />
          <ButtonMain type="submit" buttonName="Відправити" buttonStyle='active'/>
             </SubscriptionWrapper>
        </SubscriptionSection>
    )
}
export default Subscription;