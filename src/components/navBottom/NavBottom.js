import React, { useState } from "react";
import "./NavBottom.css";
import ReactLogo from "../../asset/images/oswa.png";
import Osw from "../../asset/icons/oswas.svg";

import EmailIcon from "@mui/icons-material/Email";
import Twitter from "../../asset/icons/twitter.svg";
import Facebook from "../../asset/icons/facebook.svg";
import Instagram from "../../asset/icons/instagram.svg";
import Telegram from "../../asset/icons/telegram.svg";
import GooglePlay from "../../asset/icons/googlePlay.svg";
import AppStore from "../../asset/icons/appstore.svg";
const NavBottom = () => {
  return (
    <div className="nav-bottom-container">
      <div className="nav-bottom-input">
        <EmailIcon
          className="EmailIcon"
          sx={{
            color: "#0d2344",
          }}
        />
        <input
          type="text"
          placeholder="Subscribe to mail feed"
          id="Subscribe"
          name="Subscribe"
        />
        <div className="input-buttom">
          <button>Done</button>
          <div className="arrow-right-login">
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
      </div>
      <div className="nav-bottom-col-4">
        <div className="nav-bottom-col">
          <div className="responsive-nav">
            <img src={Osw} alt="" />
            <div className="nav-botton-border-color"></div>
            <div>
              <p>The most beautiful exclusive</p>
              <p>properties and luxury apartments</p>
            </div>
            <div className="Icon1">
              <div className="nav-bottom-icon">
                <div className="facebook-icon">
                  <img src={Facebook} alt="" />
                </div>
                <div className="twitter-icon">
                  <img src={Twitter} alt="" />
                </div>
                <div className="instagram-icon">
                  <img src={Instagram} alt="" />
                </div>
                <div className="telegram-icon">
                  <img src={Telegram} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="responsive-help">
            <div style={{ fontWeight: "bold" }}>Useful Links</div>
            <div className="nav-botton-border-color2"></div>
            <div>About</div>
            <div>Partners</div>
            <div>Contact</div>
          </div>
          <div className="responsive-help">
            <div style={{ fontWeight: "bold" }}>Help?</div>
            <div className="nav-botton-border-color2"></div>
            <div>FAQ</div>
            <div>Term & Conditi0on</div>
            <div>Policy</div>

            <div>Privacy</div>
          </div>
          <div className="nav-bottom-col4">
            <div style={{ fontWeight: "bold" }}>Download the app</div>
            <div className="nav-botton-border-color2"></div>
            <div className="sssss">
              <div className="Google-play-icon">
                <img src={GooglePlay} alt="" />
              </div>
              <div className="Google-play-icon1">
                <img src={AppStore} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBottom;
