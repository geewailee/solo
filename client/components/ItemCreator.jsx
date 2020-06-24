import React, { Component } from "react";

// class Click extends Component {
const ItemCreator = props => {
  return (
    <div>
      <input type='text' onChange={props.input} />
      <button onClick={props.click}>Click</button>;
    </div>
  );
};

export default ItemCreator;
