import React from "react";
import "../TileCard/TileCard.css";

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

// const styles = {
//   sectionStyles: {
//     background: "white"
//   }
// };

// We use JSX curly braces to evaluate the style object on the JSX tag

const TileCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt="" src={props.image} />
    </div>
    </div>
);

export default TileCard;

