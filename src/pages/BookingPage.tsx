import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Data } from "../assets";
import BookingCard from "../components/BookingCard";

const BookingPage = () => {
  return (
    <div style={{ background: "#F5F5F5", minHeight: "100vh" }}>
      <Container>
        <h1>BookingPage</h1>

        <div>
          <div></div>

          <div></div>
        </div>

        <Row>
          {Data.carData.map((item, i) => (
            <Col xs={4} key={i}>
              <BookingCard carItem={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BookingPage;
