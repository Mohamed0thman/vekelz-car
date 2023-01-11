import React from "react";
import { Link, NavLink } from "react-router-dom";
import { LinkType } from "../types";
type Props = {
  link: LinkType;
  disabled?: boolean;
};

const SideBarLink = ({ link, disabled }: Props) => {
  const { Icon, title, path } = link;
  return (
    <li className="sidebar-navitem">
      {disabled ? (
        <Link to={path} className="sidebar-navlink">
          <Icon />
          <span
            className="d-none d-md-inline "
            style={{
              marginLeft: "10px",
              fontSize: "1.4rem",
              fontWeight: "500",
            }}
          >
            {title}
          </span>
        </Link>
      ) : (
        <NavLink
          to={path}
          className={({ isActive }) =>
            `sidebar-navlink ${isActive ? "sidebar-navlink-active" : ""}`
          }
        >
          <Icon />
          <span
            className="d-none  d-md-inline"
            style={{
              marginLeft: "10px",
              fontSize: "1.4rem",
              fontWeight: "500",
            }}
          >
            {title}
          </span>
        </NavLink>
      )}
    </li>
  );
};

export default SideBarLink;
