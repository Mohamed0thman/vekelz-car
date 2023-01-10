import React from "react";
import { Link, NavLink } from "react-router-dom";
import { LinkType } from "../types";
type Props = {
  link: LinkType;
};

const SideBarLink = ({ link }: Props) => {
  const { icon, title, path } = link;
  return (
    <li className="sidebar-navitem">
      <NavLink
        to={path}
        className={({ isActive }) =>
          `sidebar-navlink ${isActive ? "sidebar-navlink-active" : ""}`
        }
      >
        <img src={icon} alt={title} />
        <span style={{ marginLeft: "10px" }}>{title}</span>
      </NavLink>
    </li>
  );
};

export default SideBarLink;
