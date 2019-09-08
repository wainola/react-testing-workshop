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
      ],
      formValues: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState(
      {
        ...this.state,
        formValues: {
          ...this.state.formValues,
          [evt.target.name]: [evt.target.value]
        }
      }
    );
  }
  handleSubmit(evt) {
    evt.preventDefault();
    const values = Object.values(this.state.formValues);
    if (values[0].includes("admin") && values[1].includes("password")) {
      this.props.history.push("/home");
    }
  }
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
