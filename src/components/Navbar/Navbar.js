import React from "react";
import "../Navbar/Navbar.css";

const styles = {
    navbarStyle: {
      justifyContent: "flex-end"
    }
  };
  

  
  const Navbar = ({children}) => (
    <nav style={styles.navbarStyle} className="navbar">
      <a href="/">Clicky</a>
      <div id="contact-modal" className="modal fade" role="dialog">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
        <h4 className="modal-one">You guessed correctly</h4>
        <h4 className="modal-two">Game Over!</h4>
      </div>
      </div>
      </div>
      </div>
      {children}
    </nav>
  );
  
  export default Navbar;
  