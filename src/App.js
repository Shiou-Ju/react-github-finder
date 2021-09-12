import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="Github用戶 搜尋器" icon="fab fa-github" />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
