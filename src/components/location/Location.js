import React from "react";
import "./Location.css";
import Map from "../../asset/icons/map.svg";
import IconGroup from "../../asset/icons/icongroup.svg";
import YoutubeEmbed from "../youtubeEmbed/YoutubeEmbed";
import NavBottom from "../navBottom/NavBottom";
import Footer from "../footer/Footer";
import Busra from "../../asset/images/busra.png";
import ArrowRight from "../../asset/icons/arrow-right.svg";
import Beds from "../../asset/icons/beds.svg";
import Bath from "../../asset/icons/bath.svg";

const Location = () => {
  return (
    <div className="location-container">
      <div className="location-wrapper">
        <div>
          <p
            style={{
              marginLeft: "2%",
              fontFamily: "Montserrat",
              fontWeight: "bold",
              fontSize: "26px",
              color: "#0D323D",
            }}
          >
            Location and near places:
          </p>
        </div>
        <div className="location-map-cont">
          <div className="location1">
            <div className="location-map">
              <img src={Map} alt="" />
              <p>house location</p>
            </div>
          </div>

          <div className="location2">
            <div className="location-map2">
              <i class="fas fa-utensils"></i>
              <div className="location-color"></div>
              <img src={Map} alt="" />
              <p>house location</p>
            </div>
          </div>
          <div className="location2">
            <div className="location-map2">
              <i class="fas fa-utensils"></i>
              <div className="location-color"></div>
              <img src={Map} alt="" />
              <p>house location</p>
            </div>
          </div>
          <div className="location2">
            <div className="location-map2">
              <i class="fas fa-utensils"></i>
              <div className="location-color"></div>
              <img src={Map} alt="" />
              <p>house location</p>
            </div>
          </div>
        </div>
        <div className="loc-Feature">
          <p
            style={{
              marginLeft: "2%",
              fontFamily: "Montserrat",
              fontWeight: "bold",
              fontSize: "26px",
              marginTop: "5%",
            }}
          >
            Features and services:
          </p>
          <div className="loc-Feature-img">
            <img
              src={IconGroup}
              alt=""
              style={{
                width: "80%",
                marginLeft: "2%",
                marginTop: "2%",
                height: "40%",
                color: "#0D323D",
              }}
            />
          </div>
        </div>
        <div></div>
        <h3
          style={{
            marginLeft: "2%",
            fontFamily: "Montserrat",
            fontWeight: "bold",
            fontSize: "26px",
            marginTop: "5%",
            color: "#0D323D",
          }}
        >
          Take a Tour in the house:
        </h3>
        <div style={{ padding: "10px" }}>
          <YoutubeEmbed embedId="rokGy0huYEA" />
        </div>
        <div className="Location-Homes">
          <div className="Location-More-Homes-top">
            <h3
              style={{
                marginLeft: "2%",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                fontSize: "26px",
                marginTop: "5%",
                color: "#0D323D",
              }}
            >
              More Homes for you:
            </h3>
          </div>
          <div
            className="Location-More-Homes-bottom"
            style={{ marginLeft: "3%", marginTop: "2%" }}
          >
            <div className="loc-h">
              <div>
                <img src={Busra} alt="" style={{ width: "70%" }} />
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  width: "30%",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      fontSize: "20px",
                      color: "#0D323D",
                    }}
                  >
                    1200$
                  </p>
                </div>
                <div>
                  <p>2 rooms</p>
                </div>
              </div>
              <div>
                <p className="rr" style={{ marginLeft: "2%" }}>
                  Baghdad Street 1St floor
                </p>
              </div>
              <div className="loc-bottom">
                <div
                  style={{
                    border: "1px solid #fff",
                    height: "80%",
                    width: "40%",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                    boxShadow: "1px 2px 5px #a9a8a8",
                  }}
                >
                  <div>View home</div>
                  <div>
                    <img src={ArrowRight} alt="" />
                  </div>
                </div>
                <div className="loc-ico">
                  <div>
                    <img src={Beds} alt="" />
                  </div>
                  <div>3 Beds</div>
                </div>
                <div className="loc-ico">
                  <div>
                    <img src={Bath} alt="" />
                  </div>
                  <div>3 Bath</div>
                </div>
              </div>
            </div>

            <div className="loc-h">
              <div>
                <img src={Busra} alt="" style={{ width: "70%" }} />
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  width: "30%",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      fontSize: "20px",
                      color: "#0D323D",
                    }}
                  >
                    1200$
                  </p>
                </div>
                <div>
                  <p>2 rooms</p>
                </div>
              </div>
              <div>
                <p style={{ marginLeft: "2%" }} className="rr">
                  Baghdad Street 1St floor
                </p>
              </div>
              <div className="loc-bottom">
                <div
                  style={{
                    border: "1px solid #fff",
                    height: "80%",
                    width: "40%",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                    boxShadow: "1px 2px 5px #a9a8a8",
                  }}
                >
                  <div>View home</div>
                  <div>
                    <img src={ArrowRight} alt="" />
                  </div>
                </div>
                <div className="loc-ico">
                  <div>
                    <img src={Beds} alt="" />
                  </div>
                  <div>3 Beds</div>
                </div>
                <div className="loc-ico">
                  <div>
                    <img src={Bath} alt="" />
                  </div>
                  <div>3 Bath</div>
                </div>
              </div>
            </div>

            <div className="loc-h">
              <div>
                <img src={Busra} alt="" style={{ width: "70%" }} />
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  width: "30%",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      fontSize: "20px",
                      color: "#0D323D",
                    }}
                  >
                    1200$
                  </p>
                </div>
                <div>
                  <p>2 rooms</p>
                </div>
              </div>
              <div>
                <p className="rr" style={{ marginLeft: "2%" }}>
                  Baghdad Street 1St floor
                </p>
              </div>
              <div className="loc-bottom">
                <div
                  style={{
                    border: "1px solid #fff",
                    height: "80%",
                    width: "40%",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                    boxShadow: "1px 2px 5px #a9a8a8",
                  }}
                >
                  <div>View home</div>
                  <div>
                    <img src={ArrowRight} alt="" />
                  </div>
                </div>
                <div className="loc-ico">
                  <div>
                    <img src={Beds} alt="" />
                  </div>
                  <div>3 Beds</div>
                </div>
                <div className="loc-ico">
                  <div>
                    <img src={Bath} alt="" />
                  </div>
                  <div>3 Bath</div>
                </div>
              </div>
            </div>
            <div className="loc-h">
              <div>
                <img src={Busra} alt="" style={{ width: "70%" }} />
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  width: "30%",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      fontSize: "20px",
                      color: "#0D323D",
                    }}
                  >
                    1200$
                  </p>
                </div>
                <div>
                  <p>2 rooms</p>
                </div>
              </div>
              <div>
                <p className="rr" style={{ marginLeft: "2%" }}>
                  Baghdad Street 1St floor
                </p>
              </div>
              <div className="loc-bottom">
                <div
                  style={{
                    border: "1px solid #fff",
                    height: "80%",
                    width: "40%",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                    boxShadow: "1px 2px 5px #a9a8a8",
                  }}
                >
                  <div>View home</div>
                  <div>
                    <img src={ArrowRight} alt="" />
                  </div>
                </div>
                <div className="loc-ico">
                  <div>
                    <img src={Beds} alt="" />
                  </div>
                  <div>3 Beds</div>
                </div>
                <div className="loc-ico">
                  <div>
                    <img src={Bath} alt="" />
                  </div>
                  <div>3 Bath</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavBottom />
      <Footer />
    </div>
  );
};

export default Location;
