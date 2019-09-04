import React from "react";

import "./FormField.scss";

const FormField = ({ fieldName, placeholder, type, handleChange }) => (
  <div className="form-field-container">
    <label>{fieldName}</label>{" "}
    <input
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      name={fieldName.toLowerCase()}
    />
  </div>
);

export default FormField;
