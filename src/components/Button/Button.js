import React from "react";
import { ButtonStyle } from "./Button.styles";

const Button = (props) => {
  const { className } = props;
  return (
    <ButtonStyle onClick={props.onClick} to={props.to} className={className}>
      <span>{props.children}</span>
    </ButtonStyle>
  );
};

export default Button;
