import React from "react";
import { Link } from "react-router-dom";
import { LinkType } from "../types";
type Props = {
  link: LinkType;
};

const SideBarLink = ({ link }: Props) => {
  const { icon, title, path } = link;
  return (
    <li style={{ marginTop: "20px" }}>
      <Link to={path}>
        <img src={icon} alt={title} />
        <span style={{ marginLeft: "10px" }}>{title}</span>
      </Link>
    </li>
  );
};

export default SideBarLink;
