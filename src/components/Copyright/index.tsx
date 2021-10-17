import React from "react";
import "./Copyright.css";

interface Props {}

const Copyright: React.FC<Props> = ({}) => {
  return (
    <div className="copyright">
      <p className="copyright__top">
        More ways to shop: <a href="">Find an Apple Store</a> or{" "}
        <a href="">other retailer</a> near you. Or call 1-800-MY-APPLE.
      </p>

      <div className="copyright__bottom">
        <p>Copyright © 2021 Apple Inc. All rights reserved.</p>
        <div className="copyright__links">
          <a href="">Privacy Policy</a>
          <a href="">Terms of Use</a>
          <a href="">Sales and Refunds</a>
          <a href="">Legal</a>
          <a href="">Site Map</a>
        </div>
        <a href="" className="country">
          United States
        </a>
      </div>
    </div>
  );
};

export default Copyright;
