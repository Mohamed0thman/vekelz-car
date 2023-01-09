import React from "react";
import { Icons } from "../assets";
import { CarType } from "../types";

type Props = {
  carItem: CarType;
};

const BookingCard = ({ carItem }: Props) => {
  const { name, image, favorite, type, price, user } = carItem;
  return (
    <div
      style={{
        background: "white",
        borderRadius: 16,
        width: "325px",
        height: "267px",
        marginBottom: "24px",
        padding: "24px",
      }}
      className="d-flex flex-column  justify-content-between"
    >
      <div>
        <div className="d-flex align-items-center justify-content-between">
          <h4>{name}</h4>
          {favorite ? (
            <img src={Icons.heartRedIcon} alt="heartRedIcon" />
          ) : (
            <img src={Icons.heartWhiteIcon} alt="heartWhiteIcon" />
          )}
        </div>

        <div>Coupe</div>
      </div>
      <div
        style={{ width: "230px", height: "100px" }}
        className="d-flex align-self-center"
      >
        <img
          style={{
            width: "100",
            height: "100%",
            objectFit: "cover",
            margin: "0 auto",
          }}
          src={image}
          alt={name}
        />
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center ">
          <div>
            <img src={Icons.userIcon} alt="userIcon" />
            <span>{user}</span>
          </div>
          <div>
            <img src={Icons.recycleIcon} alt="recycleIcon" />
            <span>{type}</span>
          </div>
        </div>
        <div>${price}/d</div>
      </div>
    </div>
  );
};

const styles = {
  bookingCard: {},
};

export default BookingCard;
