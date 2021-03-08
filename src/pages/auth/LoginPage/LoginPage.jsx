import React, { useState } from "react";

import LoginSection from "./LoginSection";
import CodeVerificationSection from "./CodeVerificationSection";
import BaseTypography from "../../../components/BaseComponents/BaseTypography";

import LogoImage from "../../../assets/images/logo.png";
import "./LoginPage.scss";

function LoginPage() {
  const [step, setStep] = useState(0);

  const handleLogin = () => {
    setStep(1);
  };

  return (
    <div className="login__wrapper">
      <div className="login__container">
        <div className="login__content">
          <BaseTypography variant="heading1" className="login__content-heading">
            Verify yourself!
          </BaseTypography>
          <BaseTypography
            variant="body1"
            className="login__content-description"
          >
            Password-less login
          </BaseTypography>
          {step === 0 ? (
            <LoginSection onLogin={handleLogin} />
          ) : (
            <CodeVerificationSection />
          )}
        </div>
        <div className="login__footer">
          <img src={LogoImage} alt="logo" width="114px" />
          <BaseTypography variant="body3">
            yoUr neXt daTa prOtectiOn syStem
          </BaseTypography>
        </div>
      </div>
      <div className="login__side-image"></div>
    </div>
  );
}

export default LoginPage;
