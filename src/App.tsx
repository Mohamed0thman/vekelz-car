import React, { Suspense } from "react";
import { Header, SideBar, Spinners, Layout } from "./components";
import {
  AssestsPage,
  // BookingPage,
  BuyCarsPage,
  CalenderPage,
  // HomePage,
  MessagesPage,
  SellCarsPage,
  ServicesPage,
} from "./pages";
const HomePage = React.lazy(() => import("./pages/HomePage"));
const BookingPage = React.lazy(() => import("./pages/BookingPage"));

import { Route, Routes } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/assests" element={<AssestsPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/sell-cars" element={<SellCarsPage />} />
        <Route path="/buy-cars" element={<BuyCarsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/calender" element={<CalenderPage />} />
        <Route path="/messages" element={<MessagesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
