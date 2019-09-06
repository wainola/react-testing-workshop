import React from "react";

import "./UserInfoBox.scss";

const UserInfoBox = ({
  user: {
    name = "",
    email = "",
    location = "",
    login = "",
    picture = "",
    registered = "",
    gender = "",
    cell = ""
  },
  noInfo
}) => (
  <div className="user">
    <div className="user-image">
      <img className="image-user" src={picture.large} />
      <span className="gender">{gender}</span>
    </div>
    <p className="name">
      <span className="name">name:</span>
      {name.title} {name.first} {name.last}
    </p>
    <p>
      <span className="email">email:</span> {email}
    </p>
    <p>
      <span className="location">location</span>
      {location.street}, ciudad de {location.city}
    </p>
    <p>
      <span className="login">login data:</span>
      <div className="user-data">
        <span className="username">Username: {login.username}</span>
        <span className="password"> Password: {login.password}</span>
      </div>
    </p>
    <p>
      <span className="registered">Registered</span> since{" "}
      {new Date(registered.date).toDateString()} {registered.age} años de
      antiguedad
    </p>
    <p>
      <span className="phone">Telefono: {cell}</span>
    </p>
  </div>
);

export default UserInfoBox;
