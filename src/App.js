import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users.js";
import Search from "./components/users/Search";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    // while fetching it should be true
    loading: false,
  };

  searchUsers = async (text) => {
    // sent up from Search.js
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ loading: false, users: res.data.items });
  };

  render() {
    return (
      <div className="App">
        <Navbar title="Github用戶 搜尋器" icon="fab fa-github" />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
