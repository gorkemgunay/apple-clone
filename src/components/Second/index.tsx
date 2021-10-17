import React from "react";
import "./Second.css";
import secondIphone from "../../assets/second-iphone.jpeg";
import secondIphoneMobile from "../../assets/second-iphone-mobile.jpeg";

interface Props {}

const Second: React.FC<Props> = () => {
  return (
    <div className="second">
      <div className="second__body">
        <h2>iPhone 13</h2>
        <h3>Your new superpower.</h3>
        <div className="second__links">
          <a href="">Learn more</a>
          <a href="">Buy</a>
        </div>
      </div>

      <img
        className=" second__image second__image--desktop "
        src={secondIphone}
        alt="iphone-13"
      />
      <img
        className=" second__image second__image--mobile "
        src={secondIphoneMobile}
        alt="iphone-13-mobile"
      />
    </div>
  );
};
export default Second;
