import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Data } from "../assets";
import PieCard from "../components/PieCard";
import RecommendCard from "../components/RecommendCard";

const HomePage = () => {
  return (
    <div style={{ background: "#F5F5F5", minHeight: "100vh" }}>
      <Container fluid>
        <Row>
          {Data.pieData.map((item, i) => (
            <Col key={i}>
              <PieCard pieItem={item} />
            </Col>
          ))}
        </Row>

        <Row>
          {Data.recommendData.map((item, i) => (
            <Col key={i}>
              <RecommendCard recommendItem={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
