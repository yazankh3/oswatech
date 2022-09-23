import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../asset/images/baghdad.png";
import img2 from "../../asset/images/busra.png";
import img3 from "../../asset/images/rayyan.png";
import img4 from "../../asset/images/new_baghdad.png";
import img5 from "../../asset/images/karbala.png";
import img6 from "../../asset/images/neniveh.png";
import img7 from "../../asset/images/najaf.png";
import Arrow from "../../asset/icons/arrow.svg";
import "./Homes_In_Iraq.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Homes_In_Iraq = () => {
  var settings1 = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    infiniteLoop: true,
    // transitionTime: 2,
    // stopOnHover: true,
  };
  return (
    <div className="iraq-container">
      <div className="iraq-up">
        <div className="iraq-up-top">
          <div>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "38px",
                fontWeight: "bold",
              }}
            >
              Explore homes In IRAQ
            </p>
          </div>
          <div
            style={{
              width: "70%",
              height: "1px",
              border: "1px solid #0D323D",
              backgroundColor: "#0D323D",
            }}
          ></div>
          <div>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "20px",
              }}
            >
              Take a deep dive and browse homes for sale, original neighbourhood
              photos,
            </p>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "20px",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              resident reviews and local insights to find what is right for you.
            </p>
          </div>
        </div>
      </div>
      <Carousel {...settings1}>
        <div className="firts-slider">
          <div className="first-slider-col">
            <div className="first-slider-row-text">
              <p>Baghdad</p>
            </div>
            <img src={img} alt="" />
            <div className="red-homes">
              <div className="first-slider-row-button">
                <button>View Home</button>
                <div>
                  <img src={Arrow} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="first-slider-row">
            <div className="first-slider-row-write">
              <div className="res">
                <div className="first-slider-row-text">
                  <p>AL-Busra</p>
                </div>
                <img
                  className="img-2"
                  src={img2}
                  alt=""
                  style={{ marginBottom: "20px" }}
                ></img>
                <div className="res1">
                  <div className="first-slider-row-button1">
                    <button>View Home</button>
                    <div>
                      <img src={Arrow} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="first-slider-row-text">
                <p>Al-Rayyan</p>
              </div>
              <img src={img3} alt="" className="img-2" />
              <div>
                <div className="first-slider-row-button2">
                  <button>View Home</button>
                  <div>
                    <img src={Arrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="first-slider-row">
            <div>
              <div className="first-slider-row-text">
                <p>New Baghdad</p>
              </div>
              <img
                src={img4}
                alt=""
                style={{ marginBottom: "20px" }}
                className="img-2"
              />
              <div>
                <div className="first-slider-row-button3">
                  <button>View Home</button>
                  <div>
                    <img src={Arrow} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="first-slider-row-text">
                <p>Karbala</p>
              </div>
              <img src={img5} alt="" className="img-2" />
              <div>
                <div className="first-slider-row-button4">
                  <button>View Home</button>
                  <div>
                    <img src={Arrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="first-slider-col">
            <div className="first-slider-row-text">
              <p>Nineveh</p>
            </div>
            <img src={img6} alt="" />
            <div>
              <div className="first-slider-row-button4">
                <button>View Home</button>
                <div>
                  <img src={Arrow} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="first-slider-row">
            <div>
              <div className="first-slider-row-text">
                <p>Najaf</p>
              </div>
              <div className="first-slider-row-text">
                <p>Najaf</p>
              </div>
              <img
                src={img7}
                className="img-2"
                alt=""
                style={{ marginBottom: "20px" }}
              />
              <div>
                <div className="first-slider-row-button5">
                  <button>View Home</button>
                  <div>
                    <img src={Arrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="first-slider-row-text">
                <p>AL-Busra</p>
              </div>
              <img src={img2} alt="" className="img-2" />
              <div>
                <div className="first-slider-row-button4">
                  <button>View Home</button>
                  <div>
                    <img src={Arrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================== */}
        <div className="firts-slider">
          <div className="first-slider-col">
            <div className="first-slider-row-text">
              <p>Baghdad</p>
            </div>
            <img src={img} alt="" />
            <div className="red-homes">
              <div className="first-slider-row-button">
                <button>View Home</button>
                <div>
                  <img src={Arrow} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="first-slider-row">
            <div className="first-slider-row-write">
              <div className="res">
                <div className="first-slider-row-text">
                  <p>AL-Busra</p>
                </div>
                <img
                  className="img-2"
                  src={img2}
                  alt=""
                  style={{ marginBottom: "20px" }}
                ></img>
                <div className="res1">
                  <div className="first-slider-row-button1">
                    <button>View Home</button>
                    <div>
                      <img src={Arrow} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="first-slider-row-text">
                <p>Al-Rayyan</p>
              </div>
              <img src={img3} alt="" className="img-2" />
              <div>
                <div className="first-slider-row-button2">
                  <button>View Home</button>
                  <div>
                    <img src={Arrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="first-slider-row">
            <div>
              <div className="first-slider-row-text">
                <p>New Baghdad</p>
              </div>
              <img
                src={img4}
                alt=""
                style={{ marginBottom: "20px" }}
                className="img-2"
              />
              <div>
                <div className="first-slider-row-button3">
                  <button>View Home</button>
                  <div>
                    <img src={Arrow} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="first-slider-row-text">
                <p>Karbala</p>
              </div>
              <img src={img5} alt="" className="img-2" />
              <div>
                <div className="first-slider-row-button4">
                  <button>View Home</button>
                  <div>
                    <img src={Arrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="first-slider-col">
            <div className="first-slider-row-text">
              <p>Nineveh</p>
            </div>
            <img src={img6} alt="" />
            <div>
              <div className="first-slider-row-button4">
                <button>View Home</button>
                <div>
                  <img src={Arrow} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="first-slider-row">
            <div>
              <div className="first-slider-row-text">
                <p>Najaf</p>
              </div>
              <div className="first-slider-row-text">
                <p>Najaf</p>
              </div>
              <img
                src={img7}
                className="img-2"
                alt=""
                style={{ marginBottom: "20px" }}
              />
              <div>
                <div className="first-slider-row-button5">
                  <button>View Home</button>
                  <div>
                    <img src={Arrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="first-slider-row-text">
                <p>AL-Busra</p>
              </div>
              <img src={img2} alt="" className="img-2" />
              <div>
                <div className="first-slider-row-button4">
                  <button>View Home</button>
                  <div>
                    <img src={Arrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ============================================== */}

        <div className="firts-slider">
          <div className="first-slider-col">
            <div className="first-slider-row-text">
              <p>Baghdad</p>
            </div>
            <img src={img} alt="" />
            <div className="red-homes">
              <div className="first-slider-row-button">
                <button>View Home</button>
                <div>
                  <img src={Arrow} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="first-slider-row">
            <div className="first-slider-row-write">
              <div className="res">
                <div className="first-slider-row-text">
                  <p>AL-Busra</p>
                </div>
                <img
                  className="img-2"
                  src={img2}
                  alt=""
                  style={{ marginBottom: "20px" }}
                ></img>
                <div className="res1">
                  <div className="first-slider-row-button1">
                    <button>View Home</button>
                    <div>
                      <img src={Arrow} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="first-slider-row-text">
                <p>Al-Rayyan</p>
              </div>
              <img src={img3} alt="" className="img-2" />
              <div>
                <div className="first-slider-row-button2">
                  <button>View Home</button>
                  <div>
                    <img src={Arrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="first-slider-row">
            <div>
              <div className="first-slider-row-text">
                <p>New Baghdad</p>
              </div>
              <img
                src={img4}
                alt=""
                style={{ marginBottom: "20px" }}
                className="img-2"
              />
              <div>
                <div className="first-slider-row-button3">
                  <button>View Home</button>
                  <div>
                    <img src={Arrow} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="first-slider-row-text">
                <p>Karbala</p>
              </div>
              <img src={img5} alt="" className="img-2" />
              <div>
                <div className="first-slider-row-button4">
                  <button>View Home</button>
                  <div>
                    <img src={Arrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="first-slider-col">
            <div className="first-slider-row-text">
              <p>Nineveh</p>
            </div>
            <img src={img6} alt="" />
            <div>
              <div className="first-slider-row-button4">
                <button>View Home</button>
                <div>
                  <img src={Arrow} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="first-slider-row">
            <div>
              <div className="first-slider-row-text">
                <p>Najaf</p>
              </div>
              <div className="first-slider-row-text">
                <p>Najaf</p>
              </div>
              <img
                src={img7}
                className="img-2"
                alt=""
                style={{ marginBottom: "20px" }}
              />
              <div>
                <div className="first-slider-row-button5">
                  <button>View Home</button>
                  <div>
                    <img src={Arrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="first-slider-row-text">
                <p>AL-Busra</p>
              </div>
              <img src={img2} alt="" className="img-2" />
              <div>
                <div className="first-slider-row-button4">
                  <button>View Home</button>
                  <div>
                    <img src={Arrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Homes_In_Iraq;
