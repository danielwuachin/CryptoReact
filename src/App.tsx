import React from "react";

import "./App.css";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SinglePage from "./pages/SinglePage";

function App() {
  return (
    <div className="w-100vw text-light ">
      <div className="background"></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:cryptoName" element={<SinglePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
