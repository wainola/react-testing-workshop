import React from "react";
import { shallow, mount } from "enzyme";

class Comp extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [{ name: "pepito" }, { name: "juanito" }]
    };
  }

  changeName(name, idx) {
    console.log(this.state.users[idx]);
    const { users } = this.state;
    users[idx].name = name;
    this.setState({
      ...this.state,
      users: [...users]
    });
  }

  render() {
    const { users } = this.state;
    const { title } = this.props;
    return (
      <div className="container">
        <h3>{title}</h3>
        {users.map(item => (
          <p>{item.name}</p>
        ))}
      </div>
    );
  }
}

describe("<Home />", () => {
  let mt;
  test("Deberia mostrar dos <p> y un <h1>", () => {
    mt = mount(<Comp title="El component" />);
    const ps = mt.find("p");
    expect(ps).toHaveLength(2);
  });
  test("Podemos cambiar el nombre de uno de los itemes", () => {
    mt.instance().changeName("marcelito", 1);
    const {
      state: { users }
    } = mt.instance();
    expect(users[1].name).toBe("marcelito");
    mt.update();
    expect(
      mt
        .find("p")
        .at(1)
        .text()
    ).toBe("marcelito");
  });
});