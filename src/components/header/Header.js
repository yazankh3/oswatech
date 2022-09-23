import React from "react";
import Translate from "../../asset/icons/translate.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-wrap">
        <div className="header-left">
          <img src={Translate} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
