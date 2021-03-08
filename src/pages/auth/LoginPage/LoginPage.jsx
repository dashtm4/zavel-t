import React from "react";

import BaseInput from "../../../components/BaseComponents/BaseInput";
import BaseTypography from "../../../components/BaseComponents/BaseTypography";
import BaseButton from "../../../components/BaseComponents/BaseButton";

import LogoImage from "../../../assets/images/logo.png";
import InputIcon from "../../../assets/images/input-icon.png";
import "./LoginPage.scss";

function LoginPage() {
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
          <BaseInput
            className="login__content-password--input"
            type="text"
            placeholder="Username"
            preIconSrc={InputIcon}
          />
          <BaseButton>Login</BaseButton>
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
