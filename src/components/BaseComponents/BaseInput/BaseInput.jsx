import React from "react";

import "./BaseInput.scss";

function BaseInput({ preIcon, inputStyle = "", ...otherProps }) {
  return (
    <div className="base-input__wrapper">
      <input className={inputStyle} {...otherProps} />
      {preIcon}
    </div>
  );
}

export default BaseInput;
