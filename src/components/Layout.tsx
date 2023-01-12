import React, { Suspense, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import ErrorBoundary from "./ErrorBoundary";
import Header from "./header/Header";
import SideBar from "./sideBar/SideBar";
import Spinners from "./Spinners";

const Layout = () => {
  const { darkTheme } = useContext(AppContext);

  return (
    <div className={`layout d-flex h-100 ${darkTheme ? "dark  " : ""} `}>
      <div className="p-0">
        <SideBar />
      </div>
      <div className="layout-right vw-100 p-0">
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
