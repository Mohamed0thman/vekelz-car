import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Data, Icons } from "../assets";
import { BookingCard, CustomDropdown, IconButton } from "../components";

const BookingPage = () => {
  const filters = ["new", "old", "auto", "manual"];
  const types = ["Hatchback", "SUV", "Crossover", "Sedan", " Sports Car"];
  return (
    <>
      <Container>
        <h1 className="page-title" style={{ marginBottom: "30px" }}>
          Booking
        </h1>

        <Row sm={6} className=" align-items-center justify-content-between">
          <Col className="d-flex align-items-center">
            <CustomDropdown
              select="filter"
              items={filters}
              styleContainer={{ marginRight: "16px" }}
            />
            <CustomDropdown select="type" items={types} />
          </Col>

          <Col
            sm={6}
            className="d-flex  align-items-center justify-content-sm-end"
          >
            <IconButton icon={<Icons.DashboardIcon />} />
            <IconButton
              styleContainer={{ marginLeft: "16px" }}
              icon={<Icons.FilterIcon />}
            />
          </Col>
        </Row>

        <Row style={{ marginTop: "30px" }} className=" gx-5">
          {Data.carData.map((item, i) => (
            <Col sm={6} lg={4} key={i}>
              <BookingCard carItem={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default BookingPage;
