import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Data } from "../assets";
import { AreaChart, ChartContainer, VerticalvarChart } from "../components";
import PieCard from "../components/PieCard";
import RecommendCard from "../components/RecommendCard";

const HomePage = () => {
  return (
    <>
      <Container>
        <Row>
          {Data.pieData.map((item, i) => (
            <Col xs="6" md="3" key={i}>
              <PieCard pieItem={item} index={i} />
            </Col>
          ))}
        </Row>

        <Row style={{ marginTop: "32px" }}>
          <Col lg="6">
            <ChartContainer title="Miles Statistics" />
          </Col>
          <Col lg="6">
            <ChartContainer title="Car Statistics" isAreaChart={true} />
          </Col>
        </Row>
        <Row style={{ marginTop: "32px" }}>
          {Data.recommendData.map((item, i) => (
            <Col lg="4" key={i}>
              <RecommendCard recommendItem={item} index={i} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
