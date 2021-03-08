import React from "react";

import BaseInput from "../../../../components/BaseComponents/BaseInput";
import BaseButton from "../../../../components/BaseComponents/BaseButton";

import InputIcon from "../../../../assets/images/input-icon.png";
import "./LoginSection.scss";

function LoginSection({ onLogin }) {
  const preIcon = (
    <div className="login-section__input--pre-icon">
      <img src={InputIcon} alt="prefix" width="30" height="40" />
    </div>
  );

  const handleLogin = () => {
    onLogin();
  };

  return (
    <>
      <BaseInput
        className="login-section__input"
        type="text"
        placeholder="Username"
        preIcon={preIcon}
      />
      <BaseButton onClick={handleLogin}>Login</BaseButton>
    </>
  );
}

export default LoginSection;
