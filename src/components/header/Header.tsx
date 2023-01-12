import { useContext, useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { CustomSwitch, CustomSearch, HeaderDropdown } from "..";
import { Images, Icons } from "../../assets";
import { AppContext } from "../../context/AppContext";

import "./header.css";

const Header = () => {
  const { darkTheme, toggleTheme } = useContext(AppContext);

  return (
    <Navbar
      sticky="top"
      expand="lg"
      className={`header ${darkTheme ? "dark" : ""}`}
    >
      <Container fluid>
        <Navbar.Collapse className="header-content  d-flex align-items-center justify-content-between ">
          <Form className="d-flex">
            <CustomSearch />
          </Form>
          <Nav className=" d-flex flex-row align-items-center">
            <CustomSwitch handleOnSwitch={() => toggleTheme()} />
            <HeaderDropdown
              classContainer="notificationIcon"
              icon={<img src={Icons.notificationIcon} alt="notificationIcon" />}
              items={["Action", "   Another action"]}
            />
            <HeaderDropdown
              icon={
                <img
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                  }}
                  src={Images.userImage}
                  alt="user"
                />
              }
              items={["Profile", "Settings", "LogOut"]}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
