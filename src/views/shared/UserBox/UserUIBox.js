import React from "react";

const UserUIBox = ({ handleSubmit, handleChange }) => (
  <div className="user-ui-form">
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <input
          type="text"
          placeholder="nuevo nombre de usuario"
          onChange={handleChange}
          name="first"
        />
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="nuevo apellido de usuario"
          onChange={handleChange}
          name="last"
        />
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="nueva locacion para el usuario"
          onChange={handleChange}
          name="street"
        />
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="nuevo username para el usuario"
          onChange={handleChange}
          name="username"
        />
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="nueva contraseña para el usuario"
          onChange={handleChange}
          name="password"
        />
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="nuevo teléfono para el usuario"
          onChange={handleChange}
          name="cell"
        />
      </div>
      <div className="form-control">
        <button type="submit">Guardar</button>
      </div>
    </form>
  </div>
);

export default UserUIBox;
