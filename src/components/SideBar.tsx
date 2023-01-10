import React from "react";
import { Nav, Navbar } from "react-bootstrap";

import { Data, Icons } from "../assets";
import Logo from "./Logo";
import SideBarLink from "./SideBarLink";

const SideBar = () => {
  return (
    <Navbar sticky="top" className=" flex-column vh-100 ">
      <div>
        <Logo icon={Icons.logoIcon} title="Motiv." />
        <ul style={{ padding: "0" }}>
          {Data.links.map((item, i) => (
            <SideBarLink link={item} key={i} />
          ))}
        </ul>
      </div>
    </Navbar>
  );
};

export default SideBar;
