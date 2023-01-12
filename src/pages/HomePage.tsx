import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Data } from "../assets";
import { AreaChart, ChartContainer, VerticalvarChart } from "../components";
import PieCard from "../components/PieCard";
import RecommendCard from "../components/RecommendCard";

const HomePage = () => {
  return (
    <>
      <Container fluid="md">
        <Row className="g-5">
          {Data.pieData.map((item, i) => (
            <Col sm="6" lg="3" key={i}>
              <PieCard pieItem={item} index={i} />
            </Col>
          ))}
        </Row>

        <Row style={{ marginTop: "32px" }} className=" g-5">
          <Col md="6">
            <ChartContainer title="Miles" />
          </Col>
          <Col md="6">
            <ChartContainer title="Car" isAreaChart={true} />
          </Col>
        </Row>
        <Row style={{ marginTop: "32px" }} className=" g-5">
          {Data.recommendData.map((item, i) => (
            <Col md="4" key={i}>
              <RecommendCard recommendItem={item} index={i} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
