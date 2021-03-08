import React from "react";
import { useHistory } from "react-router-dom";
import ReactCodeInput from "react-verification-code-input";

import BaseButton from "../../../../components/BaseComponents/BaseButton";
import "./CodeVerificationSection.scss";

function CodeVerificationSection() {
  const history = useHistory();

  const handleVerify = () => {
    history.push("/dashboard");
  };

  return (
    <>
      <ReactCodeInput className="code-verification__input" />
      <BaseButton onClick={handleVerify}>Verify</BaseButton>
    </>
  );
}

export default CodeVerificationSection;
