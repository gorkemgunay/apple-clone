import React from "react";
import "./Info.css";

interface Props {}

const Info: React.FC<Props> = () => {
  return (
    <div className="info">
      <p>
        We look forward to welcoming you to our stores. Whether you{" "}
        <a href="">shop in a store</a> or <a href="">shop online</a>, our
        Specialists can help you buy the products you love.
      </p>
    </div>
  );
};

export default Info;
