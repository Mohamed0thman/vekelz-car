import React, { Suspense, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "./Header";
import SideBar from "./SideBar";
import Spinners from "./Spinners";

const Layout = () => {
  const { darkTheme } = useContext(AppContext);

  return (
    <div className={`layout ${darkTheme ? "dark  " : ""} `}>
      <Row className="layout-row">
        <Col xs={2} className="p-0 sidebar-col">
          <SideBar />
        </Col>
        <Col xs={10} className="p-0 main-col ">
          <Header />
          <Suspense fallback={<Spinners />}>
            <main className="main">
              <Outlet />
            </main>
          </Suspense>
        </Col>
      </Row>
    </div>
  );
};

export default Layout;
