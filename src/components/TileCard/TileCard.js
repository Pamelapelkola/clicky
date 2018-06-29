import React from "react";
import "../TileCard/TileCard.css";

const TileCard = props => (

  <div className="card">
    <span onClick={() => props.moveTiles(props.id)} className="move">
      <div role="img" aria-label="click item" className="img-container">
        <img className="image"alt="" style={{width: 250, height: 250}} src={props.image} />
              </div>
    </span>
  </div>
);

export default TileCard;

