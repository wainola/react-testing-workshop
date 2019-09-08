import React from "react";
import { mount } from "enzyme";
import LoadingPage from "./index";

describe("<LoadingPage />", () => {
  let mountedComp;
  beforeEach(() => {
    const props  = {
        history: {
            push: jest.fn()
        }
    }
    mountedComp = mount(<LoadingPage {...props } />);
  });
  test("Deberia renderear dos campos de formulario tipo FormField", () => {
    const formFields = mountedComp.find("FormField");
    expect(formFields).toHaveLength(2);
  });
  test("Deberia simular el evento onChange y setear el nombre de usuario en el estado", () => {
    mountedComp
      .find("input")
      .at(0)
      .simulate("change", { target: { name: "usuario", value: "admin" } });

    const { usuario: [nombre]} = mountedComp.state('formValues')
    expect(nombre).toBe('admin')
  });
  test('Deberia simular el evento onChange y setear la clave en el state', () => {
      mountedComp.find('input').at(1).simulate('change', { target: { name: 'password', value: 'password'}})

      const { password: [value]} = mountedComp.state('formValues')
      expect(value).toBe('password')
  })
  test('Deberia simular el evento Submit', () => {
      mountedComp.setState({ formValues: { usuario : ['admin'], password: ['password']}})
      mountedComp.find('form').simulate('submit')
      expect(mountedComp.props().history.push).toHaveBeenCalled()

  })
});
