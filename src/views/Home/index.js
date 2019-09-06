import React from "react";

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
    return (
      <div className="container">
        <div className="header">
          <h2>Random User Interface!</h2>
        </div>
        <div className="user-actions">
          <h3>Acciones</h3>
          <div className="actions-container">
            <button className="table-action">Ver todos</button>
            <button className="remove-action">Eliminar actual</button>
          </div>
        </div>
        <div className="user-container">
          <div className="user-info"></div>
          <div className="user-form"></div>
        </div>
      </div>
    );
  }
}

export default Home;
