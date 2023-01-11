import { useContext, useState } from "react";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import { CustomSwitch, CustomSearch, HeaderDropdown } from ".";
import { Images, Icons } from "../assets";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const { darkTheme, toggleTheme } = useContext(AppContext);

  return (
    <Navbar
      sticky="top"
      expand="lg"
      style={{
        background: darkTheme ? "#242731" : "#ffffff",
        borderLeft: darkTheme ? " 1px solid #1F2128" : "1px solid #F5F5F5",
      }}
    >
      <Container fluid>
        <Navbar.Collapse
          className="d-flex  align-items-center justify-content-between "
          style={{ padding: "0 30px" }}
        >
          <Form className="d-flex">
            <CustomSearch />
          </Form>
          <Nav className=" d-flex flex-row align-items-center">
            <CustomSwitch handleOnSwitch={() => toggleTheme()} />
            <HeaderDropdown
              styleContainer={{ marginRight: "40px" }}
              icon={
                <img
                  className="thumbnail-image"
                  src={Icons.notificationIcon}
                  alt="notificationIcon"
                />
              }
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
