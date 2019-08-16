import React from "react";
import withSpinner from "../HOC/withSpinner";

const Spinner = ({ className }) => {
  const BasicSpinnerProps = {
    className: "spinner-border " + (className || "")
  };

  return <div {...BasicSpinnerProps} />;
};
export default withSpinner(Spinner);
