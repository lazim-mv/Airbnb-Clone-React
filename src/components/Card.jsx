import React from "react";
import star from '../images/new.png'

function Card(props) {

  let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }



  return (
    <div className="cards">
    {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={props.coverImg} alt="" className="card-img" />
      <div className="card-stats">
        <img className="card-star" src={star} alt="" />
        <span style={{paddingRight:"5px"}} >{props.stats.rating}</span>
        <span className="grey">{props.stats.reviewCount} &#x2022;</span>
        <span className="grey">{props.location}</span>
      </div>
      <p className="card-title">{props.title}</p>
      <p> <span className="bold"> {props.price}</span> / person</p>
    </div>
  );
}

export default Card;
