import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Data } from "../assets";
import { AreaChart, ChartContainer, VerticalvarChart } from "../components";
import PieCard from "../components/PieCard";
import RecommendCard from "../components/RecommendCard";

const HomePage = () => {
  return (
    <div style={{ background: "#F5F5F5", minHeight: "100vh" }}>
      <Container fluid style={{ paddingRight: "30px", paddingLeft: "30px" }}>
        <Row style={{ paddingTop: "30px" }}>
          {Data.pieData.map((item, i) => (
            <Col key={i}>
              <PieCard pieItem={item} index={i} />
            </Col>
          ))}
        </Row>

        <Row style={{ marginTop: "32px" }}>
          <Col>
            <ChartContainer Chart={<VerticalvarChart />} />
          </Col>
          <Col>
            <ChartContainer Chart={<AreaChart />} />
          </Col>
        </Row>
        <Row style={{ marginTop: "32px" }}>
          {Data.recommendData.map((item, i) => (
            <Col key={i}>
              <RecommendCard recommendItem={item} index={i} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
