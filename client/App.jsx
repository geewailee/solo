import React, { Component } from "react";
import ItemCreator from "./components/ItemCreator.jsx";
import Rows from "./components/Rows.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { rows: [] };
    this.input = this.input.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
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

  input(event) {
    console.log(`input ${event.target.value}`);
    this.setState({ input: event.target.value });
  }

  add() {
    console.log(`added`);

    fetch(`/api/add`, {
      method: "POST",
      body: JSON.stringify({ input: this.state.input }),
      headers: { "Content-Type": "application/json" },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(`add data ${data}`);
      })
      .catch(err => console.log(`add fetch error ${err}`));
  }
  remove() {
    console.log(`removed`);

    fetch(`/api/remove`, {
      method: "POST",
      body: JSON.stringify({}),
      headers: { "Content-Type": "application/json" },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(`remove data ${data}`);
      })
      .catch(err => console.log(`remove fetch error ${err}`));
  }

  render() {
    console.log(`this.state.rows`);
    const individual = [];
    for (let i = 0; i < this.state.rows.length; i++) {
      const row = this.state.rows[i];
      // console.log(row);
      // console.log(row.id);

      individual.push(<Rows key={"rows" + i} rows={row.name} />);
    }

    return (
      <div>
        <h2>Items</h2>
        <ItemCreator add={this.add} input={this.input} remove={this.remove} />
        {individual}
      </div>
    );
  }
}

export default App;
