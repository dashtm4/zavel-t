import React from "react";

import "./BaseInput.scss";

function BaseInput({ preIconSrc, ...otherProps }) {
  return (
    <div className="base-input__wrapper">
      <input {...otherProps} />
      <div className="base-input__pre-icon">
        <img src={preIconSrc} alt="prefix" width="30" height="40" />
      </div>
    </div>
  );
}

export default BaseInput;
