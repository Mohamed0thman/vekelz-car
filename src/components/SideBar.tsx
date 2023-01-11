import { Navbar } from "react-bootstrap";
import { Data, Icons } from "../assets";
import Logo from "./Logo";
import SideBarLink from "./SideBarLink";

const SideBar = () => {
  return (
    <Navbar
      sticky="top"
      className={`flex-column vh-100  sidebar align-items-start `}
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
