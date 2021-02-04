import React from "react";
import { Button as AntdButton } from "antd";
import "./Button.scss";

export const Button = ({ type, icon, text, className = "", ...props }) => {
  return (
    <AntdButton
      type={type}
      icon={icon}
      className={`${className} btn`}
      {...props}
    >
      {text}
    </AntdButton>
  );
};
