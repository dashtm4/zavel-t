import React from "react";
import classNames from "classnames";

import { VARIANT_TYPES } from "./constants";
import "./BaseTypography.scss";

function BaseTypography({
  variant = "",
  className: wrapperStyle = "",
  children,
  ...otherProps
}) {
  const typoStyle = Object.keys(VARIANT_TYPES).includes(variant) ? variant : "";
  const TagName = typoStyle ? VARIANT_TYPES[typoStyle] : "div";

  return (
    <TagName
      className={classNames(wrapperStyle, "base-typography", typoStyle)}
      {...otherProps}
    >
      {children}
    </TagName>
  );
}

export default BaseTypography;
