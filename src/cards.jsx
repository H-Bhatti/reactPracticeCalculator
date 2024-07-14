import React from "react";
import "./cards.css";

function Card(props) {
  return (
    <>
      <div className="cards">
        <span>
          <img src={props.imageSrc} className="image" />
          <div className="cardInfo">
            <h2 className="cardTitle">{props.sName}</h2>
            <a href={props.sLink} target="_NewTab">
              <button>watch Now</button>
            </a>
          </div>
        </span>
        <p></p>
      </div>
    </>
  );
}

export default Card;
