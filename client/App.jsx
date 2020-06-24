import React, { Component } from "react";
import Click from "./components/Click.jsx";
import Rows from "./components/Rows.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { rows: [] };
    this.click = this.click.bind(this);
  }

  componentDidMount() {
    // click(event) {
    // console.log(event.target);

    fetch(`/api`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log(`data ${data}`);
        return this.setState({ rows: data });
      })
      .catch(err => console.log("fetch api error", err));
  }
  click() {}
  render() {
    console.log(`this.state.rows`);
    const individual = [];
    for (let i = 0; i < this.state.rows.length; i++) {
      const row = this.state.rows[i];
      console.log(row);
      // console.log(row.id);

      individual.push(<Rows key={"rows" + i} rows={row.name} />);
    }

    return (
      <div>
        <h2>Items</h2>
        {individual}
        <Click click={this.click} />
      </div>
    );
  }
}

export default App;
