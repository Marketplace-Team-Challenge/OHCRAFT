import { useState } from "react";
import InputMain from "../../UI/Input/Input";
import * as Styled from './Subscription.styled';
import ButtonMain from "../../UI/Button/Button";
import SignLayout from "../SignLayout/SignLayout";

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
      <Styled.SubscriptionSection>
        <SignLayout/>
            <Styled.SubscriptionWrapper>
                <Styled.SubscriptionTextContainer>
                    <Styled.SubscriptionText>Хочеш першим отримувати актуальні новини від нас?</Styled.SubscriptionText>
                <Styled.SubscriptionSubText>Залиш свою електронну пошту</Styled.SubscriptionSubText>
                </Styled.SubscriptionTextContainer>
                

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
             </Styled.SubscriptionWrapper>
        </Styled.SubscriptionSection>
    )
}
export default Subscription;