import React from "react";
import { mount } from "enzyme";

class Comp extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [{ name: "pepito" }, { name: "juanito" }]
    };
  }

  changeName(name, idx) {
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

describe("<Comp />", () => {
  let mt;
  test("Deberia mostrar dos <p> y un <h3>", () => {
    mt = mount(<Comp title="El component" />);
    const ps = mt.find("p");
    expect(ps).toHaveLength(2);
  });
  test("Deberia cambiar el nombre de uno dentro de los parrafos", () => {
    const mounted = mount(<Comp title="El componente 2" />);
    mounted.instance().changeName("marcelito", 1);
    mounted.update();
    const {
      state: { users }
    } = mounted.instance();
    expect(users[1].name).toBe("marcelito");
  });
});
