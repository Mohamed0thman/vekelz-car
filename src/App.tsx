import React from "react";
import { Layout, ErrorBoundary } from "./components";
import {
  AssestsPage,
  // BookingPage,
  BuyCarsPage,
  CalenderPage,
  // HomePage,
  MessagesPage,
  SellCarsPage,
  ServicesPage,
  SettingsPage,
} from "./pages";
const HomePage = React.lazy(() => import("./pages/HomePage"));
const BookingPage = React.lazy(() => import("./pages/BookingPage"));

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <ErrorBoundary>
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
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
