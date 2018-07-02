import React from "react";
import Navbar from "../Navbar/Navbar"

//Handle increment and top score to be added
  const ScoreKeeper = props => (
    <Navbar>
      <ul>
       <li >Score: {props.handleIncrement} | Top score:{props.topScore} </li>
       </ul>  
    </Navbar>
  );
 

export default ScoreKeeper;
