import { type } from "@amcharts/amcharts5";
import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

type Props = {
  icon: string;
  title: string;
};

const Logo = ({ icon, title }: Props) => {
  return (
    <div className="sidebar-logo">
      <Link
        to="/"
        className="sidebar-logo-link d-flex align-items-center h-100"
      >
        <img
          src={icon}
          alt={title}
          style={{
            marginRight: "10px",
          }}
        />
        <h2 className="sidebar-title d-none  d-md-block">{title}</h2>
      </Link>
    </div>
  );
};

export default Logo;
