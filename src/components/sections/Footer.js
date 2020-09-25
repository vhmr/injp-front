import React from "react";
import Grid from "@material-ui/core/Grid";
import "../../footer.css";

const Footer = () => {
  return (
    <div>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            Company<span>logo</span>
          </h3>

          <p class="footer-links"></p>

          <p class="footer-company-name">Company Name © 2015</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>444 S. Cedros Ave</span> Solana Beach, California
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+1.555.555.5555</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">support@company.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div class="footer-icons">
            <i class="fa fa-facebook"></i>

            <i class="fa fa-twitter"></i>

            <i class="fa fa-linkedin"></i>

            <i class="fa fa-github"></i>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
