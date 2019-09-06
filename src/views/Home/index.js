import React from "react";
import UserBox from "../shared/UserBox";
import UserInfoBox from "../shared/UserInfoBox";

import "./Home.scss";

class Home extends React.Component {
  async componentDidMount() {
    const { localStorageKey, UserService, requestSize } = this.props;
    const users = localStorage.getItem(localStorageKey);
    if (!users) {
      const users = await UserService.fetchUsers(requestSize);
      localStorage.setItem(localStorageKey, JSON.stringify(users));
    }
  }

  render() {
    console.log(this.props);
    const { localStorageKey } = this.props;
    const users = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    const rndIndex = Math.trunc(Math.random() * (50 - 1) + 1);
    const oneUser = users[rndIndex];
    return (
      <div className="user-container">
        <div className="user-header">
          <h2>Random User Interface!</h2>
        </div>
        <div className="user-actions">
          <h3>Acciones</h3>
          <div className="user-actions-container">
            <button className="table-action">Ver todos</button>
            <button className="remove-action">Eliminar actual</button>
          </div>
        </div>
        <div className="user-container-info">
          <div className="user-info info-box">
            <UserInfoBox user={oneUser} />
          </div>
          <div className="user-info info-form">
            <UserBox />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
