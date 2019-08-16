import React, { Fragment } from "react";

function withSpinner(WrappedComponent) {
  return function wrapper(props) {
    console.log(props);
    const newProps = {};
    const { elementType, spinnerClass, colorClass, loading, children } = props;

    if (elementType === "spinner") {
      newProps.className = "spinner-" + spinnerClass + colorClass;
    }

    return <WrappedComponent {...props} {...newProps} />;
  };
}
export default withSpinner;
