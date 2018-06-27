import React from "react";
import "./Header.css"

// We use JSX curly braces to evaluate the style object


const styles = {
  headerStyle: {
    background: "#2ddce2"
  },
  headingStyle: {
    fontSize: "2em"
  },
  headingStyletwo: {
    fontSize: "1em"
  }
};

// We use JSX curly braces to evaluate the style object

const Header = () => (
    <header style={styles.headerStyle} className="header">
    <h1 style={styles.headingStyle}>Clicky Game</h1>
    {/* <h2 style={styles.headingStyletwo}>Click each tile to earn points, but only click it once!</h2> */}
  
  </header>
);

export default Header;

