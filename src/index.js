import "./index.css";
import App from "./App";
import React from "react";
import Map from "./components/map/Map";
import ReactDOM from "react-dom/client";
import Home from "./components/home/Home";
import Rent from "./components/rent/Rent";
import reportWebVitals from "./reportWebVitals";
import Houses from "./components/houses/Houses";
import Location from "./components/location/Location";
import Department from "./components/department/Department";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route path="/home" element={<Home />} />
        <Route exact path="/rent" element={<Rent />} />
        <Route exact path="/house" element={<Houses />} />
        <Route exact path="/department" element={<Department />} />
        <Route exact path="/location" element={<Location />} />
        <Route exact path="/home2" element={<App />} />
        <Route exact path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
