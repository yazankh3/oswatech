import React from "react";
import "./Houses.css";
import Beds from "../../asset/icons/beds.svg";
import Bath from "../../asset/icons/bath.svg";

const Houses = () => {
  return (
    <div className="houses-container">
      <div className="houses-wraper">
        <div className="houses-image">
          <div className="houses-image-text">
            <div className="houses-image-text-button">
              <p>New</p>
            </div>
          </div>
        </div>
        <div className="houses-bottom">
          <div className="houses-bottom-text">
            <div>
              <h2>3.000$</h2>
            </div>
            <div>
              <p style={{ marginTop: "10%" }}>New Baghdad, Iraq</p>
            </div>
          </div>
          <div className="houses-bottom-2">
            <div>
              <img src={Beds} alt="" />
            </div>
            <div>
              <h5 style={{ fontWeight: "bold" }}>2 Beds</h5>
            </div>
            <div>
              <img src={Bath} alt="" />
            </div>
            <div>
              <h5 style={{ fontWeight: "bold" }}>2 Bath</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Houses;
