import React from "react";
import "../Nav/Nav.css";

const styles = {
    navbarStyle: {
      justifyContent: "flex-end"
    }
  };
  
  // We use JSX curly braces to evaluate the style object on the JSX tag
  
  const Navbar = () => (
    <nav style={styles.navbarStyle} className="navbar">
      <a href="/">Clicky</a>
      <p></p>
    </nav>
  );
  
  export default Navbar;
  