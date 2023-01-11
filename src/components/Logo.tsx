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
    <div style={styles.logo} className="">
      <Link to="/" className="sidebar-logo d-flex align-items-center h-100">
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

const styles = {
  logo: {
    height: "78px",
  },
};

export default Logo;
