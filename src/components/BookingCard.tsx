import React, { useEffect, useState } from "react";
import { Icons } from "../assets";
import { CarType } from "../types";

type Props = {
  carItem: CarType;
};

const BookingCard = ({ carItem }: Props) => {
  const { name, image, favorite, type, price, user } = carItem;

  const [love, setLove] = useState<null | boolean>(null);

  useEffect(() => {
    setLove(favorite);
  }, []);

  return (
    <div className="booking-card d-flex flex-column  justify-content-between">
      <div>
        <div className="booking-card-header d-flex align-items-center justify-content-between">
          <h4>{name}</h4>
          {love ? (
            <Icons.HeartIcon
              fill="#F84F56"
              onClick={() => setLove(false)}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <Icons.HeartIcon
              fill="none"
              stroke="#A4A5A6"
              onClick={() => setLove(true)}
            />
          )}
        </div>

        <div style={{ color: "#72767C", fontSize: "1.6rem" }}>Coupe</div>
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
      <div className="booking-card-footer d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center ">
          <div
            style={{ marginRight: "18px" }}
            className="d-flex  align-items-center "
          >
            <Icons.UserIcon fill="#72767C" />
            <span style={{ marginLeft: "4px" }}>{user}</span>
          </div>
          <div className="d-flex  align-items-center ">
            <Icons.RepeatIcon fill="#72767C" />
            <span style={{ marginLeft: "4px" }}>{type}</span>
          </div>
        </div>
        <h4 className="price">
          ${price} <span style={{ fontWeight: "400" }}>/d</span>{" "}
        </h4>
      </div>
    </div>
  );
};

export default BookingCard;
