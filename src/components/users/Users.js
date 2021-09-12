import React, { Component } from "react";
import UserItem from "./UserItem";

export class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "moo1",
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo",
      },
      {
        id: "2",
        login: "moo2",
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo",
      },
      {
        id: "3",
        login: "moo3",
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo",
      },
    ],
  };

  render() {
    return (
      <div>
        {this.state.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;