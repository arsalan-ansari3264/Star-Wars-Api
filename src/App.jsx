import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home";
import CardDetails from "./components/CardDetails/CardDetails";
import Error from "./components/Error/Error";

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/planet/:id" element={<CardDetails />}/>
            <Route path="*" element={<Error />}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
