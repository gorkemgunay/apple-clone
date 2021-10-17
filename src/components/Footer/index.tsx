import React, { useRef } from "react";
import "./Footer.css";

interface Props {}

const Footer: React.FC<Props> = () => {
  const openMenu = (e: any) => {
    e.preventDefault();

    if (e.target.classList == "footer__menu") {
      e.target.classList.add("open");
    } else {
      e.target.classList.remove("open");
    }
  };

  return (
    <div className="footer">
      <div
        onClick={(e) => {
          openMenu(e);
        }}
        className="footer__menu"
      >
        <h5>Shop and Learn</h5>
        <div className="footer__menu--wrapper">
          <li>
            <a href="">Mac</a>
          </li>

          <li>
            <a href="">iPad</a>
          </li>

          <li>
            <a href="">iPhone</a>
          </li>

          <li>
            <a href="">Watch</a>
          </li>

          <li>
            <a href="">TV</a>
          </li>

          <li>
            <a href="">Music</a>
          </li>

          <li>
            <a href="">AirPods</a>
          </li>

          <li>
            <a href="">HomePod</a>
          </li>

          <li>
            <a href="">iPad touch</a>
          </li>

          <li>
            <a href="">AirTag</a>
          </li>

          <li>
            <a href="">Accessories</a>
          </li>

          <li>
            <a href="">Gift Cards</a>
          </li>
        </div>
      </div>

      <div
        onClick={(e) => {
          openMenu(e);
        }}
        className="footer__menu"
      >
        <h5>Services</h5>

        <div className="footer__menu--wrapper">
          <li>
            <a href="">Apple Music</a>
          </li>

          <li>
            <a href="">Apple TV+</a>
          </li>

          <li>
            <a href="">Apple Fitness+</a>
          </li>

          <li>
            <a href="">Apple News+</a>
          </li>

          <li>
            <a href="">Apple Arcade</a>
          </li>

          <li>
            <a href="">iCloud</a>
          </li>

          <li>
            <a href="">Apple One</a>
          </li>

          <li>
            <a href="">Apple Card</a>
          </li>

          <li>
            <a href="">Apple Books</a>
          </li>

          <li>
            <a href="">Apple Podcasts</a>
          </li>

          <li>
            <a href="">App Store</a>
          </li>

          <div className="footer__menu--inner">
            <h5>Account</h5>
            <li>
              <a href="">Manage Your Apple ID</a>
            </li>
            <li>
              <a href="">Apple Store Account</a>
            </li>

            <li>
              <a href="">iCloud.com</a>
            </li>
          </div>
        </div>
      </div>

      <div
        onClick={(e) => {
          openMenu(e);
        }}
        className="footer__menu"
      >
        <h5>Apple Store</h5>

        <div className="footer__menu--wrapper">
          <li>
            <a href="">Find a Store</a>
          </li>

          <li>
            <a href="">Shop Online</a>
          </li>

          <li>
            <a href="">Genius Bar</a>
          </li>

          <li>
            <a href="">Today at Apple</a>
          </li>

          <li>
            <a href="">Apple Camp</a>
          </li>

          <li>
            <a href="">Apple Store App</a>
          </li>

          <li>
            <a href="">Refurbished and Clearance</a>
          </li>

          <li>
            <a href="">Financing</a>
          </li>

          <li>
            <a href="">Apple Trade in</a>
          </li>

          <li>
            <a href="">Order Status</a>
          </li>

          <li>
            <a href="">Shopping Help</a>
          </li>
        </div>
      </div>

      <div
        onClick={(e) => {
          openMenu(e);
        }}
        className="footer__menu"
      >
        <h5>For Business</h5>

        <div className="footer__menu--wrapper">
          <li>
            <a href="">Apple and Business</a>
          </li>

          <li>
            <a href="">Shop for Business</a>
          </li>

          <div className="footer__menu--inner">
            <h5>For Education</h5>
            <li>
              <a href="">Apple and Education</a>
            </li>
            <li>
              <a href="">Shop for K-12</a>
            </li>

            <li>
              <a href="">Shop for College</a>
            </li>
          </div>

          <div className="footer__menu--inner">
            <h5>For Healthcare</h5>

            <li>
              <a href="">Apple in Healthcare</a>
            </li>
            <li>
              <a href="">Health on Apple Watch</a>
            </li>

            <li>
              <a href="">Health Records on iPhone</a>
            </li>
          </div>

          <div className="footer__menu--inner">
            <h5>For Government</h5>

            <li>
              <a href="">Shop for Government</a>
            </li>
            <li>
              <a href="">Shop for Veterans and Military</a>
            </li>
          </div>
        </div>
      </div>

      <div
        onClick={(e) => {
          openMenu(e);
        }}
        className="footer__menu"
      >
        <h5>Apple Values</h5>

        <div className="footer__menu--wrapper">
          <li>
            <a href="">Accessibility</a>
          </li>

          <li>
            <a href="">Education</a>
          </li>

          <li>
            <a href="">Environment</a>
          </li>

          <li>
            <a href="">Inclusion and Diversity</a>
          </li>

          <li>
            <a href="">Privacy</a>
          </li>

          <li>
            <a href="">Racial Equity and Justice</a>
          </li>

          <li>
            <a href="">Supplier Responsibility</a>
          </li>

          <div className="footer__menu--inner">
            <h5>About Apple</h5>

            <li>
              <a href="">Newsroom</a>
            </li>

            <li>
              <a href="">Apple Leadership</a>
            </li>

            <li>
              <a href="">Career Opportunities</a>
            </li>

            <li>
              <a href="">Investors</a>
            </li>

            <li>
              <a href="">Ethics & Complianca</a>
            </li>

            <li>
              <a href="">Events</a>
            </li>

            <li>
              <a href="">Contact Apple</a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
