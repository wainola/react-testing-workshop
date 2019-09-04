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
  }

  handleChange(evt) {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [evt.target.name]: [evt.target.value]
      }
    });
  }
  handleSubmit() {
    const values = Object.values(this.state.formValues);
    if (values.includes("admin") && values.includes("password")) {
      console.log("this.props", this.props);
    }
  }
  render() {
    console.log("this.props", this.props);
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
