import React, { Component } from "react";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

class Portfolio extends Component {
  constructor(props) {
    super(props);
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
            <h3>DESIGN</h3>
            <p className="skewed-box">graphic design, user interface design</p>
          </header>
          <div className="cards-container">
            <div className="card">
              <img src="/img/portfolio/mattwright-codes.png" alt="" />
              <div className="folio-info">
                <h2>Matt Wright - Professional Portfolio</h2>
                <cite>May 2020</cite>
                <p>
                  Designed in Figma for my husbands Professional Portfolio
                  Website.
                </p>
                <div className="fp-btn">
                  <a className="link" href="http://mattwright.codes/">
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
              <img src="/img/portfolio/mealpress.png" alt="" />
              <div className="folio-info">
                <h2>MealPress</h2>
                <cite>October 2019</cite>
                <p>Low Fidelity UX Foundation project at Kenzie Academy.</p>
                <div className="fp-btn">
                  <Link className="link" to="/casestudy">
                    <svg>
                      <rect
                        x="0"
                        y="0"
                        fill="none"
                        width="100%"
                        height="100%"
                      />
                    </svg>
                    View Case-Study
                  </Link>
                </div>
              </div>
            </div>
            <div className="card">
              <img src="/img/portfolio/tcog.png" alt="" />
              <div className="folio-info">
                <h2>Graphic Design - The Church of God</h2>
                <cite>Since January 2017 - Present</cite>
                <p>
                  Ongoing redesign assignment designing logos, graphics,
                  lower-thirds, animations and characters.
                </p>
                <div className="fp-btn">
                  <a className="link" href="http://thechurchofgod.org">
                    <svg>
                      <rect
                        x="0"
                        y="0"
                        fill="none"
                        width="100%"
                        height="100%"
                      />
                    </svg>
                    View Graphic Work
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
