import React from "react";
import { mount, shallow } from "enzyme";

const Button = ({ text, classStyle }) => (
  <button className={classStyle}>{text}</button>
);

const Parent = ({ style, data }) =>
  data.map((_, idx) => (
    <Button
      key={`someKey${idx}`}
      classStyle={style}
      text={`Button number ${idx + 1}`}
    />
  ));

describe("<Paren />", () => {
  let mt;
  let sc;
  test("Deberia renderear 3 botones", () => {
    const a = [1, 2, 3];
    mt = mount(<Parent style="funky-class" data={a} />);
    const btns = mt.find("Button");
    expect(btns).toHaveLength(3);
  });
  test("Los tres botones deberian tener clase funky-class", () => {
    const btns = mt.find("button");
    btns.forEach(node => expect(node.hasClass("funky-class")).toBe(true));
  });
});
