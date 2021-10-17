import React from "react";
import "./Cards.css";

interface Props {}

const Cards: React.FC<Props> = () => {
  return (
    <div className="cards">
      <div className="card appleEvent">
        <div className="card__content">
          <h4>Apple Event</h4>
          <h5>Watch on 10/18 at 10 a.m. PDT.</h5>
          <a href="">Learn more</a>
        </div>
      </div>

      <div className="card fitness">
        <div className="card__content">
          <h4>Fitness+</h4>
          <h5>Now with Pilates, Group Workouts,</h5>
          <h5>and guided Meditation.</h5>
          <div className="card__content--links">
            <a href="">Learn more</a>
            <a href="">Try it free</a>
          </div>
        </div>
      </div>

      <div className="card iPad">
        <div className="card__content">
          <h4>iPad mini</h4>
          <h5>Mega power. Mini sized.</h5>
          <div className="card__content--links">
            <a href="">Learn more</a>
            <a href="">Buy</a>
          </div>
        </div>
      </div>

      <div className="card iMac">
        <div className="card__content">
          <h4>iMac</h4>
          <h5>Say hello</h5>
          <div className="card__content--links">
            <a href="">Learn more</a>
            <a href="">Buy</a>
          </div>
        </div>
      </div>

      <div className="card appleCard">
        <div className="card__content">
          <h4>Card</h4>
          <h5>
            Get up to 3% Daily Cash back <br /> with every purchase.
          </h5>
          <div className="card__content--links">
            <a href="">Learn more</a>
            <a href="">Apply now</a>
          </div>
        </div>
      </div>

      <div className="card tv">
        <div className="card__content">
          <h4>Blush</h4>
          <h5>Inspired by an epic true love story.</h5>
          <a href="">Stream now</a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
