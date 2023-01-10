import React, { useState } from "react";

type Props = {
  handleOnDay: () => void;
  text?: string;
  styleConataner?: React.CSSProperties;
  primaryColor?: string;
};
const DateButtons = ({
  handleOnDay,
  text,
  styleConataner,
  primaryColor = "blue",
}: Props) => {
  const [target, setTarget] = useState<string>("Day");

  const buttons: string[] = ["Day", "Month", "Year"];
  return (
    <div
      className="d-flex justify-content-between align-items-center"
      style={{ ...styleConataner }}
    >
      <ul className="d-flex align-items-center">
        {buttons.map((item, i) => (
          <li>
            <button
              onClick={(e) => {
                setTarget(e.currentTarget.name);
                handleOnDay();
              }}
              name={item}
              style={{
                background: target === item ? primaryColor : "transparent",
                color: target === item ? "#fff" : "#5F6165",
                ...styles.dateItem,
              }}
              className="date-buttons"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      <h4>{text}</h4>
    </div>
  );
};

const styles = {
  dateItem: {
    borderRadius: "24px",
    width: "43px",
    height: "20px",
    textAlign: "center" as const,
    marginRight: "10px",
    fontSize: "1rem",
    fontWeight: "bold",
    border: "none",
  },
};

export default DateButtons;
