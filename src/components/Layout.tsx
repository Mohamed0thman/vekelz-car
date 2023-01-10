import React, { Suspense } from "react";
import { Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import Spinners from "./Spinners";

const Layout = () => {
  return (
    <>
      <Row>
        <Col xs="2" className="p-0 bg-white">
          <SideBar />
        </Col>
        <Col xs="10" className="p-0">
          <Header />
          <Suspense fallback={<Spinners />}>
            <Outlet />
          </Suspense>
        </Col>
      </Row>
    </>
  );
};

export default Layout;
