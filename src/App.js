import React, { Fragment, Component } from "react";
import "./App.css";

class App extends Component {
  foo = () => `bars`;

  render() {
    const name = `Bamboo Lin`;

    return (
      <div className="App">
        <h1>hello {this.foo()}</h1>
      </div>
    );
  }
}

export default App;
