/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Input from "./pages/input-page";
import Show from "./pages/show";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Input />} />
        <Route path="/results" element={<Show />} />
      </Routes>
    </>
  );
};

export default Routing;