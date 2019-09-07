import React from "react";
import { shallow } from "enzyme";

const Comp = ({ name }) => (
  <div>
    <h1>Hola mi nombre es {name} </h1>
  </div>
);

describe("<Comp />", () => {
  let sc;
  test("Debe tener un h1", () => {
    sc = shallow(<Comp name="Pepito" />);
    console.log(sc.find("h1").text());
    expect(sc.find("h1")).toHaveLength(1);
  });
  test("Debe mostrar el nombre Pepito", () => {
    const [name] = sc
      .find("h1")
      .text()
      .split(" ")
      .filter(item => item.toLowerCase().includes("pepito"));
    expect(name).toBe("Pepito");
  });
});
