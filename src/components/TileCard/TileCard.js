import React from "react";
import "../TileCard/TileCard.css";

const TileCard = props => (
  // <div className="row">
  // <div className="col-sm-4">
  <div className="card">
  <span onClick={() => props.moveTiles(props.id)} className="move">
    <div className="img-container">
      <img alt="" src={props.image} />
    </div>
    
  </span>
  </div>
);

export default TileCard;

