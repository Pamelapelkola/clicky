import React from "react";
import "./Header.css"

// We use JSX curly braces to evaluate the style object


const styles = {
  
  headingStyle: {
    fontSize: "3em"
  },
  headingStyletwo: {
    fontSize: "1em"
  }
};

// We use JSX curly braces to evaluate the style object

const Header = () => (
  <header className="header">
    <h1>Clicky Game!</h1>
  
    <h2 style={styles.headingStyletwo}>Click each image to earn points, but only click once!</h2>

  </header>
);

export default Header;

