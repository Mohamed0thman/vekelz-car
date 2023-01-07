import React from "react";
import { Icons } from "../assets";
import { CarType } from "../types";

type Props = {
  carItem: CarType;
};

const BookingCard = ({ carItem }: Props) => {
  const { name, image, favorite, type, price, user } = carItem;
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <h4>{name}</h4>
        {favorite ? (
          <img src={Icons.heartRedIcon} alt="heartRedIcon" />
        ) : (
          <img src={Icons.heartWhiteIcon} alt="heartWhiteIcon" />
        )}
      </div>
      <span>Coupe</span>
      <img src={image} alt={name} />
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex">
          <div>
            <img src={Icons.userIcon} alt="userIcon" />
            <span>4</span>
          </div>
          <div>
            <img src={Icons.recycleIcon} alt="recycleIcon" />
            <span>Manual</span>
          </div>
        </div>
        <div>$400/d</div>
      </div>
    </div>
  );
};

export default BookingCard;
