import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";

import { Data, Icons } from "../assets";
import { AppContext } from "../context/AppContext";
import Logo from "./Logo";
import SideBarLink from "./SideBarLink";

const SideBar = () => {
  const { darkTheme } = useContext(AppContext);

  return (
    <Navbar
      sticky="top"
      className={`flex-column vh-100  sidebar ${darkTheme ? "dark" : ""} `}
    >
      <Logo icon={Icons.logoIcon} title="Motiv." />
      <ul>
        {Data.links.map((item, i) => (
          <SideBarLink link={item} key={i} />
        ))}
      </ul>
    </Navbar>
  );
};

export default SideBar;
