import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Headers from "../components/layout/Header.jsx";

export default function AppRouter() {
  return (
    <>
    <Headers />
     <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
   
  );
}
