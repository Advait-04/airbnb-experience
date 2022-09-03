import React from "react";

import star from "./../images/star.png";

export default function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "online") {
        badgeText = "ONLINE";
    }

    console.log(props.location);
    return (
        <div className="card" id="c1">
            {badgeText && <div className="badge">{badgeText}</div>}
            <img
                src={require(`../images/${props.coverImg}`)}
                alt="cimage"
                className="pimage"
            ></img>
            <div className="card-info">
                <img src={star} alt="info" className="star"></img>
                <span className="rating">{props.rating}</span>
                <span className="reviewCount">({props.reviewCount}) . </span>
                <span className="country">{props.country}</span>
                <p className="title">{props.title}</p>
                <p className="price">From ${props.price} / person</p>
            </div>
        </div>
    );
}
