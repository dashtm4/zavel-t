import React from "react";

import "./BaseButton.scss";

function BaseButton({ children, ...otherProps }) {
  return (
    <button className="base-button__wrapper" {...otherProps}>
      {children}
    </button>
  );
}

export default BaseButton;
