import React from "react";
import { Route, Routes } from "react-router-dom";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import routes from "../helpers/routes";

export default function AppRouter() {
  return (
    <Routes>
      <Route path={routes.page1} element={<Page1 />} />
      <Route path={routes.page2} element={<Page2 />} />
      <Route path={routes.page3} element={<Page1 />} />
      <Route path={routes.page4} element={<Page2 />} />
      <Route path={routes.page5} element={<Page1 />} />
      <Route path={routes.page6} element={<Page2 />} />
      <Route path={routes.page7} element={<Page1 />} />
      <Route path={routes.page8} element={<Page2 />} />
    </Routes>
  );
}
