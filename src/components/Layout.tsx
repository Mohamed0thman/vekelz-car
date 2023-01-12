import React, { Suspense, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "./header/Header";
import SideBar from "./sideBar/SideBar";
import Spinners from "./Spinners";

const Layout = () => {
  const { darkTheme } = useContext(AppContext);

  return (
    <div className={`layout d-flex d-lg-table   ${darkTheme ? "dark  " : ""} `}>
      <div className=" d-table-cell p-0">
        <SideBar />
      </div>

      <div className="layout-right d-lg-table-cell vw-100 p-0">
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
