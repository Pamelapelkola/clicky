import React from "react";
import Navbar from "../Navbar/Navbar"
import "../TileCard/TileCard.css";

//Double click handler to be added here
const TileCard = props => (

  <div selected={props.selected} id={props.id} className="card">
    <span onClick={() => props.moveTiles(props.id)} className="move">
      <div role="img" aria-label="click item" className="img-container">
        <img className="image"alt="" style={{width: 250, height: 250}} src={props.image} />
              </div>
    </span>
  </div>


);

export default TileCard;

