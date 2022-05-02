import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l12 s12 center-align">
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">Content</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2022 Copyright Text
          <Link className="grey-text text-lighten-4 right" to="/">
            More Links
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
