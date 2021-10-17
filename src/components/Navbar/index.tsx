import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import shop from "../../assets/shop.svg";

interface Props {}

const Navbar: React.FC<Props> = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = (e: any) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <nav onClick={(e) => toggleMenu(e)} className={`navbar ${open && "open"}`}>
      <ul className="navbar__menu">
        <span></span>
        <div>
          <a href="">
            <img src={logo} alt="apple-logo" />
          </a>
        </div>
        <li>
          <a href="">Store</a>
        </li>
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
          <a href="">Support</a>
        </li>

        <li>
          <a href="">
            <img src={search} alt="apple-search" />
          </a>
        </li>
        <div>
          <a href="">
            <img src={shop} alt="apple-shop" />
          </a>
        </div>
      </ul>

      <div className="navbar__menu--mobile">
        <li>
          <a href="">Store</a>
        </li>
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
          <a href="">Support</a>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
