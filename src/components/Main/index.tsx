import React from "react";
import "./Main.css";
import mainIphone from "../../assets/main-iphone.jpeg";
import mainIphoneMobile from "../../assets/main-iphone-mobile.jpeg";

interface Props {}

const Main: React.FC<Props> = () => {
  return (
    <div className="main">
      <div className="main__body">
        <h2>iPhone 13 Pro</h2>
        <h3>Oh. So. Pro.</h3>
        <div className="main__links">
          <a href="">Learn more</a>
          <a href="">Buy</a>
        </div>
      </div>
      <img
        className="main__image main__image--desktop"
        src={mainIphone}
        alt="iphone-13-pro"
      />
      <img
        className="main__image main__image--mobile"
        src={mainIphoneMobile}
        alt="iphone-13-pro-mobile"
      />
    </div>
  );
};

export default Main;
