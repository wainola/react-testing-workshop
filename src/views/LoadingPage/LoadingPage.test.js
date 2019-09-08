import React from "react";
import { mount } from "enzyme";
import LoadingPage from "./index";

describe("<LoadingPage />", () => {
  let mountedComp;
  beforeEach(() => {
    mountedComp = mount(<LoadingPage />);
  });
  test("Deberia renderear dos campos de formulario tipo FormField", () => {
    const formFields = mountedComp.find("FormField");
    expect(formFields).toHaveLength(2);
  });
  test("Deberia simular el evento onChange", () => {
    mountedComp
      .find("input")
      .at(0)
      .simulate("change", { target: { name: "usuario", value: "admin" } });

    console.log(mountedComp.state("formValues"));
  });
});
