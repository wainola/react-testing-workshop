import React from "react";
import { shallow } from "enzyme";

const Comp = ({ name }) => (
  <div>
    <h1>Hola mi nombre es {name} </h1>
  </div>
);

describe("<Comp />", () => {
  let sc;
  test.only("Debe tener un h1", () => {
    sc = shallow(<Comp name="Pepito" />);

    const result = sc.find("h1");
    const rt = result.text();
    const expetedText = "hola mi nombre es pepito";
    expect(result).toHaveLength(1);
    expect(rt.toLowerCase().trim()).toBe(expetedText);
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
