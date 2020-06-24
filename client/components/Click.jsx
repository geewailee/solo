import React, { Component } from "react";

// class Click extends Component {
const Click = props => {
  return (
    <div>
      <button onClick={props.click}>Get List</button>;
    </div>
  );
};

export default Click;
