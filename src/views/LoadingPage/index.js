import React from "react";
import FormField from "../shared/FormField";

import "./LoadingPage.scss";

class LoadingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      formFields: [
        {
          fieldName: "usuario",
          placeholder: "ingrese su nombre de usuario",
          type: "text"
        },
        {
          fieldName: "contraseña",
          placeholder: "ingrese su contraseña",
          type: "password"
        }
      ]
    };
  }

  handleChange() {}
  handleSubmit() {}
  render() {
    const { formFields } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <form onSubmit={this.handleSubmit}>
              {formFields.map(formField => (
                <FormField
                  fieldName={formField.fieldName}
                  type={formField.type}
                  placeholder={formField.placeholder}
                  handleChange={this.handleChange}
                />
              ))}
              <div className="btn-container">
                <button className="submit-btn">Entrar!</button>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoadingPage;
