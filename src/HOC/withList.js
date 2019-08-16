import React, { Fragment } from "react";

function withList(WrappedComponent) {
  return function wrapper(props) {
    console.log(props);

    const newProps = {};
    const { arrayElement } = props;

    if (arrayElement.length == 0) {
      return (
        <Fragment>
          <br />
          <span className="spinner-grow spinner-grow-sm" />
        </Fragment>
      );
    }

    return <WrappedComponent {...props} {...newProps} />;
  };
}

export default withList;
