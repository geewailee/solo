import React, { Component } from "react";

// class Click extends Component {
const ItemCreator = props => {
  return (
    <div className='inputs'>
      <input type='text' onChange={props.input} />
      <button onClick={props.add}>Add</button>
      <button onClick={props.remove}>Remove</button>
    </div>
  );
};

export default ItemCreator;
