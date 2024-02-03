import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { AuthForm } from "../AuthForm/AuthForm";

export const RouterCompo = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<AuthForm />} />
    </Routes>
  );
};
