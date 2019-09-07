import React from "react";
import UserUIBox from "./UserUIBox";

import "./UserBox.scss";

class UserBox extends React.Component {
  constructor(props) {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      user: {}
    };
  }

  handleChange(evt) {
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [evt.target.name]: evt.target.value
      }
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const { user } = this.state;
    const { users, localStorageKey } = this.props;
    if (Object.keys(user).length === 6) {
      const { user: userToChange } = this.props;
      const userModified = Object.keys(user).reduce((acc, item) => {
        switch (item) {
          case "first":
            userToChange.name[item] = user[item];
            acc = { ...acc, ...userToChange };
            return acc;
          case "last":
            userToChange.name[item] = user[item];
            acc = { ...acc, ...userToChange };
            return acc;
          case "street":
            userToChange.location[item] = user[item];
            acc = { ...acc, ...userToChange };
            return acc;
          case "cell":
            userToChange[item] = user[item];
            acc = { ...acc, ...userToChange };
            return acc;
          case "username":
            userToChange.login[item] = user[item];
            acc = { ...acc, ...userToChange };
            return acc;
          case "password":
            userToChange.login[item] = user[item];
            acc = { ...acc, ...userToChange };
            return acc;
          default:
            return null;
        }
        return acc;
      }, {});
      const {
        id: { value }
      } = userModified;
      const index = users.findIndex(item => item.id.value === value);
      console.log(index);
      const newUsers = users.map((item, idx) =>
        idx !== index ? item : userModified
      );
      localStorage.setItem(localStorageKey, JSON.stringify(newUsers));
    }
  }
  render() {
    return (
      <UserUIBox
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

export default UserBox;
