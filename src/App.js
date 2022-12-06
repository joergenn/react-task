import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Router from "./components/Router";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Router/>
    </BrowserRouter>

  );
}

export default App;
