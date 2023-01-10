import React from "react";

type Props = {
  handleOnDay: () => void;
  handleOnMonth: () => void;
  handleOnYear: () => void;
  text?: string;
};
const DateButtons = ({
  handleOnDay,
  handleOnMonth,
  handleOnYear,
  text,
}: Props) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <h4>{text}</h4>
      <ul className="d-flex align-items-center">
        <li>
          <button onClick={() => handleOnDay()}>Day</button>
        </li>
        <li>
          <button onClick={() => handleOnMonth()}>Month</button>
        </li>
        <li>
          <button onClick={() => handleOnYear()}>Year</button>
        </li>
      </ul>
    </div>
  );
};

export default DateButtons;
