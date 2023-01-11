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
    <div style={styles.logo} className="d-flex  align-items-center">
      <Link to="/" className="sidebar-logo d-flex align-items-center ">
        <img
          src={icon}
          alt={title}
          style={{
            marginRight: "10px",
          }}
        />
        <h2 className="sidebar-title">{title}</h2>
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
