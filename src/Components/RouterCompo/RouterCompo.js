import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";

export const RouterCompo = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
