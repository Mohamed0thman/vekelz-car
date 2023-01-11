import React, { CSSProperties } from "react";
type Props = {
  icon: JSX.Element;
  styleContainer?: CSSProperties;
};
const IconButton = ({ icon, styleContainer }: Props) => {
  return (
    <div
      className="icon-button d-flex align-items-center justify-content-center"
      style={{
        ...styleContainer,
        width: "44px",
        height: "44px",
        borderRadius: "50%",
      }}
    >
      {icon}
    </div>
  );
};

export default IconButton;
