import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
  };

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  // if not using arrow function, you have to bind `this` when invoking submit down there
  onSubmit = (event) => {
    event.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    const { showClear, clearUsers } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="搜尋用戶"
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="搜尋"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            清除搜尋結果
          </button>
        )}
      </div>
    );
  }
}

export default Search;
