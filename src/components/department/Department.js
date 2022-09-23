import React, { useState } from "react";
import "./Department.css";
import Header from "../header/Header";
import NavBar from "../navBar/NavBar";
import ArrowRight from "../../asset/icons/arrowleft.svg";
import Arrow from "../../asset/icons/arrow.svg";
import NewBaghdad from "../../asset/images/new_baghdad.png";
import Rayyan from "../../asset/images/rayyan.png";
import ArrowCurv from "../../asset/icons/arrowcurv.svg";
import Wifi from "../../asset/icons/wifi.svg";
import Nice from "../../asset/icons/nice.svg";
import Beds3 from "../../asset/icons/3beds.svg";
import Baths3 from "../../asset/icons/2baths.svg";
import Windos from "../../asset/icons/windos.svg";
import Seller from "../../asset/icons/seller.svg";
import Whatsapp from "../../asset/icons/whatsapp.svg";
import Location from "../location/Location";
import ArrowSvg from "../../asset/icons/ArrowSvg";
import ArrowSvgFill from "../../asset/icons/ArrowSvgFill";

const Department = () => {
  const [hoverd, setHoverd] = useState(false);

  return (
    <div className="departmen-container">
      <Header />
      <NavBar />
      <div className="department-wrapper">
        <div className="department-parts">
          <div className="department-first-part">
            <div style={{ fontWeight: "bold" }}>
              <img src={ArrowRight} alt="" /> Back
            </div>
            <div>
              <p>Last page name</p>
            </div>
            <div>
              <p>
                <img src={Arrow} alt="" /> Last page name
              </p>
            </div>
            <div>
              <p>
                <img src={Arrow} alt="" /> Last page name
              </p>
            </div>
          </div>
          <div className="department-second-part">
            <div className="department-second-part-container">
              <div>
                <h3
                  style={{
                    marginLeft: "2%",
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                  }}
                >
                  Kansas Rental Buildings - New Bahgdad
                </h3>
              </div>
              <div>
                <p>1434 E Kael St, Mesa, AZ 85203</p>
              </div>
            </div>
          </div>
          <div className="department-third-part">
            <div className="department-third-part-left">
              <div className="department-third-part-left-top">
                <div className="department-third-part-left-top-cont">
                  <div>
                    <img src={NewBaghdad} alt="" />
                  </div>
                  <div className="department-third-part-left-bottom">
                    <div>
                      <img src={Rayyan} alt="" />
                    </div>
                    <div>
                      <img src={Rayyan} alt="" />
                    </div>
                    <div>
                      <img src={Rayyan} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="department-third-part-right">
              <div className="department-third-part-right-left">
                <div
                  className="department-responsive-1"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "space-around",
                    width: "100%",
                  }}
                >
                  <div>
                    <h1>3,000$</h1>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "Montserrat",
                        color: "#019DB3",
                        fontSize: "20px",
                      }}
                    >
                      per month
                    </p>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#707070",
                      width: "1px",
                      height: "100%",
                    }}
                  ></div>
                  <div className="department-third-part-right-1">
                    <div>
                      <i class="fas fa-crown"></i>
                    </div>
                    <div>
                      <h4>Owned By:</h4>
                    </div>
                    <div>
                      <p>IZAR</p>
                    </div>
                  </div>
                </div>
                <div className="department-third-part-right-right">
                  <div
                    className="department-third-part-right-right-search-buttton"
                    onMouseEnter={() => setHoverd(true)}
                    onMouseLeave={() => setHoverd(false)}
                  >
                    <div className="respo-depart-search-bot">
                      {/* <img
                        src={ArrowCurv}
                        alt=""
                        className="image-department"
                      /> */}
                      {!hoverd ? <ArrowSvg /> : <ArrowSvgFill />}
                      <p>Search</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="department-third-part-center">
                <p>
                  $799,0004 bd3 ba-- sqft <br />
                  545 E Park Avenue, Long Beach, NY 11561 <br />
                  For saleZestimate®: $786,700<br></br> Est. payment: $5,324/mo
                  <br />
                  Get pre-qualified
                  <br /> For saleZestimate®: $786,700
                  <br /> Get pre-qualified
                </p>
              </div>
              <div className="department-third-part-bottom">
                <div className="department-third-part-bottom-top">
                  <div>
                    <img src={Wifi} alt="" />
                  </div>
                  <img
                    src={Nice}
                    alt=""
                    style={{ marginLeft: "3.5%" }}
                    className="respo-Nice"
                  />
                  <div></div>
                  <img src={Wifi} alt="" />
                  <div></div>
                </div>
                <div className="department-third-part-bottom-bottom">
                  <img src={Beds3} alt="" />
                  <div></div>
                  <img src={Baths3} alt="" />
                  <div></div>
                  <img src={Windos} alt="" />
                  <div></div>
                </div>
              </div>
              <div className="department-third-part-last-bottom">
                <div className="department-third-part-last-bottom-cont">
                  <div className="department-third-part-last-bottom-left">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        width: "90%",
                        alignItems: "center",
                        textAlign: "center",
                        border: "1px solid #0D323D",
                        borderRadius: "10px",
                        height: "70%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                          width: "45%",
                        }}
                      >
                        <div>
                          <img src={Seller} alt="" />
                        </div>
                        <div>
                          <h3>Seller Details</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="department-third-part-last-bottom-right">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        width: "90%",
                        alignItems: "center",
                        textAlign: "center",
                        border: "1px solid #0D323D",
                        borderRadius: "10px",
                        height: "70%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                          width: "45%",
                        }}
                      >
                        <div>
                          <img src={Whatsapp} alt="" />
                        </div>
                        <div>
                          <h3>Seller Whatsapp</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Location />
    </div>
  );
};

export default Department;
