import React from "react";
import { Form } from "react-bootstrap";

type Porps = {
  handleOnSwitch: () => void;
};

const CustomSwitch = ({ handleOnSwitch }: Porps) => {
  return (
    <div>
      <Form.Check onChange={handleOnSwitch} type="switch" id="custom-switch" />
    </div>
  );
};

export default CustomSwitch;
