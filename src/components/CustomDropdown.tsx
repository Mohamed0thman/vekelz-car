import React, { CSSProperties } from "react";
import { Form } from "react-bootstrap";

type Props = {
  items: string[];
  select: string;
  styleContainer?: CSSProperties;
};

const CustomDropdown = ({ items, select, styleContainer }: Props) => {
  return (
    <Form.Select
      aria-label="Default select "
      defaultValue={select}
      className="custom-dropdown"
      style={{ ...styleContainer }}
    >
      <option value="select">{select}</option>
      {items.length
        ? items.map((item, i) => (
            <option key={i} value={`#${i}`}>
              {item}
            </option>
          ))
        : null}
    </Form.Select>
  );
};

export default CustomDropdown;
