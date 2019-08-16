import React, { Fragment } from "react";

function withColor(WrappedComponent) {
  return function wrapper(props) {
    console.log(props);
    const newProps = {};
    const { elementType, colorClass, inputClass, children, loading } = props;
    if (elementType === "button") {
      newProps.className = "btn-" + colorClass;
    }

    if (elementType === "text") {
      newProps.className = "form-" + inputClass;
    }

    if (elementType === "password") {
      newProps.className = "form-control " + inputClass;
    }

    if (loading) {
      newProps.children = (
        <Fragment>
          <span className="spinner-grow spinner-grow-sm" />
          {children}
        </Fragment>
      );
    }

    return <WrappedComponent {...props} {...newProps} />;
  };
}

export default withColor;
