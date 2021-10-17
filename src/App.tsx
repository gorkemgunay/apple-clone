import React from "react";
import "./App.css";
import Cards from "./components/Cards";
import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import FooterInfo from "./components/FooterInfo";
import Info from "./components/Info";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Second from "./components/Second";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <>
      <Navbar />
      <Info />
      <div className="content">
        <Main />
        <Second />
        <Cards />
        <div className="footerSection">
          <FooterInfo />
          <Footer />
          <Copyright />
        </div>
      </div>
    </>
  );
};

export default App;
