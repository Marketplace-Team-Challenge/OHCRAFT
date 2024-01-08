import { useState } from "react";
import InputMain from "../../../UI/Input/Input";
import Subscription from "../../Subscription/Subscription";

const MainPage = () => {
  //   const [status, setStatus] = useState<string | null>(null);
  // const [email, setEmail] = useState<string>("");
  // const [isLoading, setLoading] = useState<boolean>(false);
  // const [emailError, setEmailError] = useState<{ isValid: boolean; message: string }>({ isValid: true, message: '' });

  //      const handleEmailChange = (value: string, error: { isValid: boolean; message: string }): void => {
  //   setEmail(value);
  //   setEmailError(error);
  // };
    return (
        <>
        <h1>Main page</h1> 
            <Subscription /> 
            {/* <InputMain
            aria-label="Your email address"
          name="email_address"
          placeholder="Your email address"
          type="email"
          onChange={(e) => {
            handleEmailChange(e.value, e.error);
          }}
          value={email}
          error={emailError}
            /> */}
        </>
        
    )
}
export default MainPage ;