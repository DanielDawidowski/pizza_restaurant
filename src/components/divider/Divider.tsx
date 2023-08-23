import React, { FC, ReactElement } from "react";
import PropTypes from "prop-types";
import { DividerStyles } from "./DividerStyles";
import IDivider, { DividerColor } from "./Divider.interface";

const Divider: FC<IDivider> = (props): ReactElement => {
  const { color = DividerColor.primary, children } = props;

  return (
    <DividerStyles color={color}>
      <span></span>
      <h4>{children}</h4>
      <span></span>
    </DividerStyles>
  );
};

Divider.propTypes = {
  color: PropTypes.oneOf([DividerColor.primary, DividerColor.secondary]).isRequired,
  children: PropTypes.node
};

export default Divider;
