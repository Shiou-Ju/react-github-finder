import React, { Fragment, Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return React.createElement(
      `div`,
      { className: "app" },
      React.createElement(`h1`, null, "hello from react...")
    );

    // (
    //   <div className="App">
    //     <h1>hello from React</h1>
    //   </div>
    // );
  }
}

export default App;
