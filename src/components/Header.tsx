import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Images, Icons } from "../assets";
import CustomSearch from "./CustomSearch";

const Header = () => {
  return (
    <Navbar
      sticky="top"
      expand="lg"
      style={{ background: "#ffffff", borderLeft: "1px solid #F5F5F5" }}
    >
      <Container fluid>
        <Navbar className="w-100 d-flex justify-content-between">
          <Nav>
            <CustomSearch />
          </Nav>
          <Nav className=" d-flex align-items-center " navbarScroll>
            <NavDropdown
              style={{ marginRight: "40px" }}
              title={
                <div className="pull-left">
                  <img
                    className="thumbnail-image"
                    src={Icons.notificationIcon}
                    alt="notificationIcon"
                  />
                </div>
              }
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <div>
                  <img
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                    }}
                    src={Images.userImage}
                    alt="user"
                  />
                </div>
              }
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">LogOut</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
};

export default Header;
