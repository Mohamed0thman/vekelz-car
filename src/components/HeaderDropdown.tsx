import React from "react";
import { NavDropdown } from "react-bootstrap";

type Props = {
  items?: string[];
  icon?: JSX.Element;
  styleContainer?: React.CSSProperties;
  classContainer?: string;
};

const HeaderDropdown = ({
  items,
  icon,
  styleContainer,
  classContainer,
}: Props) => {
  return (
    <NavDropdown
      style={{ ...styleContainer }}
      title={<div>{icon}</div>}
      id="navbarScrollingDropdown"
      className={`${classContainer}`}
    >
      {items?.length
        ? items.map((item, i) => (
            <React.Fragment key={i}>
              <NavDropdown.Item href="#item">{item}</NavDropdown.Item>
              <NavDropdown.Divider />
            </React.Fragment>
          ))
        : null}
    </NavDropdown>
  );
};

export default HeaderDropdown;
