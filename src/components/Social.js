import React from "react";

function Social(props) {
  return (
    <div className="social">
      <p>GET IN TOUCH</p>
      <ul>
        <li>
          <a href="mailto:denise@denisewrightdesigns.com">
            <i className="fas fa-envelope-square"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/dwrightdesigns/">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/dwrightdesigns">
            <i className="fab fa-github-square"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/dwright2012/">
            <i className="fab fa-facebook-square"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Dwright_designs">
            <i className="fab fa-twitter-square"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Social;
