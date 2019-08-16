import React from "react";
import withColor from "../HOC/withColor";
import "../App.css";

const Button = ({ name, value, className, children, buttonClick }) => {
  const BasicButtonProps = {
    className: "btn " + (className || ""),
    children: children,
    onClick: buttonClick
  };

  return <button {...BasicButtonProps} />;
};
export default withColor(Button);
