import React, { Suspense, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "./Header";
import SideBar from "./sideBar/SideBar";
import Spinners from "./Spinners";

const Layout = () => {
  const { darkTheme } = useContext(AppContext);

  return (
    <div className={`layout d-flex d-lg-table   ${darkTheme ? "dark  " : ""} `}>
      <SideBar />

      <div className="layout-right d-lg-table-cell vw-100">
        <Header />
        <Suspense fallback={<Spinners />}>
          <main className="main ">
            <Outlet />
          </main>
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
