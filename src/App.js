import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users.js";
import Search from "./components/users/Search";
import { Alert } from "./components/layout/Alert";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    // while fetching it should be true
    loading: false,
    alert: null,
  };

  // search Github users
  searchUsers = async (text) => {
    // sent up from Search.js
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ loading: false, users: res.data.items });
  };

  // clear users from state
  clearUsers = () => {
    this.setState({
      users: [],
      loading: false,
    });
  };

  // alert when content is empty
  setAlert = (message, type) => {
    this.setState({ alert: { message, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
  };

  render() {
    const { users, loading } = this.state;

    return (
      <div className="App">
        <Navbar title="Github用戶 搜尋器" icon="fab fa-github" />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
