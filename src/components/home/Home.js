import React, { useState } from "react";
import Header from "../header/Header";
import NavBar from "../navBar/NavBar";
import Slider from "react-slick";
import Location from "../../asset/icons/location.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Home.css";
import Homes_In_Iraq from "../homes_In_Iraq/Homes_In_Iraq";
import NavBottom from "../navBottom/NavBottom";
import Footer from "../footer/Footer";
import { NavLink } from "react-router-dom";

const options = ["PRICE", " PRICE RANGE", "ROOMS", "BEDS"];
const Home = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[0]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(0);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    slidesToScroll: 1,
    // autoplaySpeed: 3000,
    // autoplay: true,
  };
  return (
    <div className="home-wrapper">
      <Header />
      <NavBar />
      <div className="home-container1">
        <Slider {...settings}>
          {[1, 2, 3, 4].map((item) => (
            <div className="slider-image-wraper">
              <div className="text-slider-wraper">
                <div className="slider-image-1-text-wraper">
                  <p>The Best Way To Buy/Rent Your Next Property</p>
                </div>
                <div className="slider-image-1-subtext-wraper">
                  <p>
                    With the most complete source of homes for sale & real
                    estate near you
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="under-slider">
        <div className="under-slider-bar">
          <div className="under-slider-bar-first-row">
            <div className="button-arrow-down">
              <div className="under-slider-bar-first-row-1">For Sale</div>
              <div className="button-arrow-down-icon">
                <i class="fa fa-caret-down"></i>
              </div>
            </div>
            <div>
              <div className="button-arrow-down">
                <div className="under-slider-bar-first-row-2">For Rent</div>
                <div className="button-arrow-down-icon-2">
                  <i class="fa fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div>
              <div className="under-slider-bar-first-row-3">For Invest</div>
            </div>
          </div>
          <div className="home-search">
            <div className="home-search-icon">
              <img src={Location} alt="" />
            </div>
            <div className="home-Input-Location">
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Location..."
              />
            </div>
          </div>

          <div className="dropdown-mui-container">
            <div className="dropdown-mui">
              <div>
                <React.Fragment>
                  <ButtonGroup
                    variant="contained"
                    ref={anchorRef}
                    aria-label="split button"
                  >
                    <Button sx={{ backgroundColor: "#fff", color: "#0D323D" }}>
                      {options[0]}
                    </Button>
                    <Button
                      sx={{ backgroundColor: "#fff", color: "#0D323D" }}
                      size="small"
                      aria-controls={open ? "split-button-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-label="price"
                      aria-haspopup="menu"
                      onClick={handleToggle}
                    >
                      <ArrowDropDownIcon />
                    </Button>
                  </ButtonGroup>
                </React.Fragment>
              </div>
              <div>
                {" "}
                <React.Fragment>
                  <ButtonGroup
                    variant="contained"
                    ref={anchorRef}
                    aria-label="split button"
                  >
                    <Button sx={{ backgroundColor: "#fff", color: "#0D323D" }}>
                      {options[1]}
                    </Button>
                    <Button
                      sx={{ backgroundColor: "#fff", color: "#0D323D" }}
                      size="small"
                      aria-controls={open ? "split-button-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-label="price"
                      aria-haspopup="menu"
                      onClick={handleToggle}
                    >
                      <ArrowDropDownIcon />
                    </Button>
                  </ButtonGroup>
                </React.Fragment>
              </div>
              <div>
                {" "}
                <React.Fragment>
                  <ButtonGroup
                    variant="contained"
                    ref={anchorRef}
                    aria-label="split button"
                  >
                    <Button sx={{ backgroundColor: "#fff", color: "#0D323D" }}>
                      {options[2]}
                    </Button>
                    <Button
                      sx={{ backgroundColor: "#fff", color: "#0D323D" }}
                      size="small"
                      aria-controls={open ? "split-button-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-label="price"
                      aria-haspopup="menu"
                      onClick={handleToggle}
                    >
                      <ArrowDropDownIcon />
                    </Button>
                  </ButtonGroup>
                </React.Fragment>
              </div>
              <div>
                <React.Fragment>
                  <ButtonGroup
                    variant="contained"
                    ref={anchorRef}
                    aria-label="split button"
                  >
                    <Button sx={{ backgroundColor: "#fff", color: "#0D323D" }}>
                      {options[3]}
                    </Button>
                    <Button
                      sx={{ backgroundColor: "#fff", color: "#0D323D" }}
                      size="small"
                      aria-controls={open ? "split-button-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-label="price"
                      aria-haspopup="menu"
                      onClick={handleToggle}
                    >
                      <ArrowDropDownIcon />
                    </Button>
                  </ButtonGroup>
                </React.Fragment>
              </div>
            </div>
          </div>
          <div className="home-result">
            <div className="home-result-button">
              <nav>
                <NavLink
                  to="/rent"
                  className={({ isActive }) => (isActive ? "a" : "b")}
                >
                  <button>Results</button>
                </NavLink>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "3%" }}></div>
      <div className="homesiniraq">
        <Homes_In_Iraq />
      </div>
      <div style={{ marginBottom: "25%" }}></div>
      <div className="homesiniraq2">
        <NavBottom />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
