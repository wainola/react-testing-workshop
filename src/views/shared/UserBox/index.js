import React from "react";
import UserUIBox from "./UserUIBox";

import "./UserBox.scss";

class UserBox extends React.Component {
  constructor(props) {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      users: {}
    };
  }

  handleChange(evt) {
    this.setState({
      ...this.state.users,
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if (Object.keys(this.state.users).length === 6) {
    }
  }
  render() {
    console.log(this.props);
    return <UserUIBox />;
  }
}

export default UserBox;
