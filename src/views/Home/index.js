import React from "react";
import UserBox from "../shared/UserBox";
import UserInfoBox from "../shared/UserInfoBox";

import "./Home.scss";

class Home extends React.Component {
  render() {
    const { localStorageKey } = this.props;
    const users = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    const rndIndex = Math.trunc(Math.random() * (50 - 1) + 1);
    const oneUser = !!users.length
      ? users[rndIndex]
      : {
          name: "",
          email: "",
          location: "",
          login: "",
          picture: "",
          registered: "",
          gender: "",
          cell: ""
        };
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
            <UserInfoBox user={oneUser} noInfo={!!oneUser.length} />
          </div>
          <div className="user-info info-form">
            <UserBox
              localStorageKey={localStorageKey}
              user={oneUser}
              users={users}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
