import React from "react";
import withColor from "../HOC/withColor";
import "../App.css";

const BasicInput = ({ className, placeholder, onChangeHandle, value }) => {
  const BasicInputProps = {
    className: "form " + (className || ""),
    placeholder: placeholder,
    onChange: onChangeHandle,
    value: value
  };

  return <input {...BasicInputProps} />;
};

export default withColor(BasicInput);
