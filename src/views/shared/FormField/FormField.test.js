import React from "react";
import { shallow } from "enzyme";
import FormField from "./index";

describe("<FormField />", () => {
  let shallowComp;
  beforeEach(() => {
    const props = {
      fieldName: "Usuario",
      placeholder: "Ingrese su usuario",
      type: "text",
      handleChange: jest.fn()
    };

    shallowComp = shallow(
      <FormField
        fieldName={props.fieldName}
        placeholder={props.placeholder}
        type={props.type}
        handleChange={props.handleChange}
      />
    );
  });
  test("Deberia renderear un label", () => {
    const labelResult = shallowComp.find("label");
    expect(labelResult).toHaveLength(1);
  });
  test("Deberia renderear un input", () => {
    const inputResult = shallowComp.find("input");
    expect(inputResult).toHaveLength(1);
  });
  test("Label deberia tener el texto Usuario", () => {
    const labelResult = shallowComp.find("label").text();
    expect(labelResult).toBe("Usuario");
  });
  test("El placeholder deberia decir Ingrese usuario", () => {
    const placeholderResult = shallowComp.find("input").props().placeholder;
    expect(placeholderResult).toBe("Ingrese su usuario");
  });
  test("Deberia simular el evento onChange", () => {
    shallowComp.find("input").simulate("change");
    const { onChange } = shallowComp.find("input").props();
    expect(onChange).toHaveBeenCalled();
  });
});
