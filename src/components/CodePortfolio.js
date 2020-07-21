import React, { Component } from "react";
import { motion } from "framer-motion";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      updateCount: 0,
    };
  }
  render() {
    return (
      <>
        <motion.div
          className="wrapper"
          initial={this.props.initial}
          animate={this.props.animate}
          exit={this.props.exit}
          variants={this.props.variants}
          transition={this.props.transition}
        >
          <header>
            <h3>CODE</h3>
            <p className="skewed-box">CSS, HTML, JavaScript, React</p>
          </header>
          <div className="cards-container">
            <div className="card">
              <img src="/img/portfolio/justdoit.jpg" alt="" />
              <div className="folio-info">
                <h2>Just Do It!</h2>
                <cite>June 14, 2020</cite>
                <p>
                  A responsive todo web application made with React, utilizing
                  Styled Components, SASS and JavaScript.
                </p>
                <div className="fp-btn">
                  <a
                    className="link"
                    href="https://justdoitapp.netlify.app/"
                  >
                    <svg>
                      <rect
                        x="0"
                        y="0"
                        fill="none"
                        width="100%"
                        height="100%"
                      />
                    </svg>
                    View Live
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <img className="image" src="/img/portfolio/bloom.png" alt="" />
              <div className="folio-info">
                <h2>Bloom</h2>
                <cite>June 17, 2020</cite>
                <p>
                  A responsive blog theme designed in Figma and built using HTML
                  and SASS.
                </p>
                <div className="fp-btn">
                  <a
                    className="link"
                    href="https://github.com/dwrightdesigns/bloom"
                  >
                    <svg>
                      <rect
                        x="0"
                        y="0"
                        fill="none"
                        width="100%"
                        height="100%"
                      />
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <img src="/img/portfolio/form.png" alt="" />
              <div className="folio-info">
                <h2>Registration Form</h2>
                <cite>February 2020</cite>
                <p>
                  A responsive form practice for school project made with HTML
                  and vanilla CSS.
                </p>
                <div className="fp-btn">
                  <a
                    className="link"
                    href="https://github.com/dwrightdesigns/ux-form-assignment"
                  >
                    <svg>
                      <rect
                        x="0"
                        y="0"
                        fill="none"
                        width="100%"
                        height="100%"
                      />
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </>
    );
  }
}

export default Portfolio;
