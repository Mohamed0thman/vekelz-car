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
    <>
      <Row>
        <Col xs="2" className="p-0">
          <SideBar />
        </Col>
        <Col xs="10" className="p-0  align-items-center">
          <Header />
          <Suspense fallback={<Spinners />}>
            <main className={`${darkTheme ? "main dark" : "main"}`}>
              <Outlet />
            </main>
          </Suspense>
        </Col>
      </Row>
    </>
  );
};

export default Layout;
