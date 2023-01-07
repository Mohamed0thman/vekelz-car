import { Header, SideBar } from "./components";
import {
  AssestsPage,
  BookingPage,
  BuyCarsPage,
  CalenderPage,
  HomePage,
  MessagesPage,
  SellCarsPage,
  ServicesPage,
} from "./pages";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Row>
        <Col xs="2" className="p-0">
          <SideBar />
        </Col>
        <Col xs="10" className="p-0">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/assests" element={<AssestsPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/sell-cars" element={<SellCarsPage />} />
            <Route path="/buy-cars" element={<BuyCarsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/calender" element={<CalenderPage />} />
            <Route path="/messages" element={<MessagesPage />} />
          </Routes>
        </Col>
      </Row>
    </div>
  );
}

export default App;
