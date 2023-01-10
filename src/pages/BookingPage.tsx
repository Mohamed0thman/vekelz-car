import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Data } from "../assets";
import BookingCard from "../components/BookingCard";

const BookingPage = () => {
  return (
    <>
      <Container>
        <h1>Booking</h1>

        <div>
          <div></div>

          <div></div>
        </div>

        <Row style={{ marginTop: "30px" }}>
          {Data.carData.map((item, i) => (
            <Col xs={4} key={i}>
              <BookingCard carItem={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default BookingPage;
