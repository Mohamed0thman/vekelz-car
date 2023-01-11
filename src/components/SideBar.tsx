import { useContext } from "react";
import { Navbar } from "react-bootstrap";

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
      <ul style={{ marginTop: "auto" }}>
        <SideBarLink
          link={{
            path: "/settings",
            title: "Settings",
            Icon: Icons.SettingIcon,
          }}
        />
        <SideBarLink
          link={{ path: "#disable", title: "Log out", Icon: Icons.LogoutIcon }}
          disabled={true}
        />
      </ul>
    </Navbar>
  );
};

export default SideBar;
