import React from "react";
import { Route, Routes } from "react-router-dom";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
    </Routes>
  );
}
