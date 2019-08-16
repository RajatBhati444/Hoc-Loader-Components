import React from "react";
import withList from "../HOC/withList";
import "../App.css";

const List = props => {
  const { arrayElement } = props;

  return arrayElement.map(number => (
    <div>
      <ul className="orderlist">{number}</ul>
    </div>
  ));
};

export default withList(List);
