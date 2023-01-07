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
    <div
      style={{ height: "78px", fontSize: "24px", fontWeight: "bold" }}
      className="d-flex  align-items-center"
    >
      <Link to="/" className="d-flex  align-items-center ">
        <img
          src={icon}
          alt={title}
          style={{
            marginRight: "10px",
          }}
        />
        <span>{title}</span>
      </Link>
    </div>
  );
};

export default Logo;
