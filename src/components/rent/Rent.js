import React, { useState } from "react";
import Header from "../header/Header";
import NavBar from "../navBar/NavBar";
import "./Rent.css";
import Svg from "../../asset/icons/rent.svg";
import ArrowSvg from "../../asset/icons/arrowdown.svg";
import Price from "../../asset/icons/price.svg";
import Map from "../map/Map";
import { NavLink } from "react-router-dom";
import Location from "../../asset/icons/location.svg";
import { motion } from "framer-motion";
import Houses from "../houses/Houses";
import { TextField } from "@mui/material";
import FilterSections from "../filterSection/FilterSections";

const Rent = () => {
  const [click, setClicked] = useState(false);
  const [click2, setClicked2] = useState(false);
  const [click3, setClicked3] = useState("Beds");
  const [click4, setClicked4] = useState(false);
  const [click5, setClicked5] = useState(false);
  //   const [click6, setClicked6] = useState(false);
  //   const [click7, setClicked7] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("You clicked submit.");
    setClicked({ click: true });
    setClicked2(false);
    setClicked3("Beds");
    setClicked4(false);
    setClicked5(false);
  };

  const handleClick2 = (e) => {
    e.preventDefault();
    console.log("You clicked submit.");
    setClicked(false);
    setClicked2({ click2: true });
    setClicked3("Beds");
    setClicked4(false);
    setClicked5(false);
  };

  const handleClick3 = (e) => {
    e.preventDefault();
    console.log("You clicked submit.");
    setClicked(false);
    setClicked2(false);
    setClicked3("Price");
    setClicked4(false);
    setClicked5(false);
  };

  const handleClick4 = (e) => {
    e.preventDefault();
    console.log("You clicked submit.");
    setClicked(false);
    setClicked2(false);
    setClicked3("Beds");
    setClicked4({ click4: true });
    setClicked5(false);
  };
  const handleClick5 = (e) => {
    e.preventDefault();
    console.log("You clicked submit 5.");
    setClicked(false);
    setClicked2(false);
    setClicked3("Beds");
    setClicked4(false);
    setClicked5({ click5: true });
  };

  return (
    <div className="rent-container">
      <Header />
      <NavBar />

      <div className="rent-wrapper">
        <div className="rent-top">
          <h3
            style={{
              fontFamily: "Montserrat",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Rent Your Perfect Property
          </h3>
        </div>
        <FilterSections />
        <div className="rent-bot">
          <div className="rent-bot-left">
            <Map />
          </div>
          <div className="rent-bot-right">
            <div className="rent-bot-right-top">
              <div className="rent-bot-right-top-left">
                <div>
                  <h4
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    Kansas Rental Buildings
                  </h4>
                </div>
                <div>
                  <p>112 Results</p>
                </div>
              </div>
              <div className="rent-bot-right-top-right">
                <div className="rent-bot-right-top-right-left">Sort by:</div>
                <div className="rent-bot-right-top-right-right">
                  <div>Name</div>
                  <div>
                    <img src={ArrowSvg} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="rent-bot-right-bottom">
              <div className="rent-items-wraper">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <NavLink to="/department" style={{ color: "#0D323D" }}>
                    <div className="house-rent">
                      <Houses />
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rent;
