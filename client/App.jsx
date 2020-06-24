import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
    };
  }

  // use fetch to pull from backend (eventually database)
  componentDidMount() {
    fetch(`/api`)
      .then(res => {
        console.log(res.json());
      })
      .then(data => {
        console.log(data);
        return this.setState({ rows });
      })
      .catch(err => console.log("fetch api error"));
  }
  render() {
    return (
      <div>
        <h1>{this.state.rows}</h1>
        <input type='text' />
        <div className='space'></div>
        <button>Create</button>
      </div>
    );
  }
}

export default App;

// const App = () => {
//   return <h1> HEY GUYS </h1>;
// };
