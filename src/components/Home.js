import React from "react";
import { Link } from "react-router-dom";
import Social from "./Social";
import { motion } from "framer-motion";

function Home(props) {
  return (
    <>
      <motion.div
        className="home"
        initial={props.initial}
        animate={props.animate}
        exit={props.exit}
        transition={props.transition}
        variants={props.variants}
      >
        <p>
          <span>Hello, I'm Denise...</span> <br /> a UX Designer, Front-End
          Developer
          <br /> and Photographer in Tulsa, Oklahoma
        </p>

        <div className="buttons">
          <div className="fp-btn">
            <Link className="link" to="/design">
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%" />
              </svg>
              Design Portfolio
            </Link>
          </div>
          <div className="fp-btn">
            <Link className="link" to="/code">
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%" />
              </svg>
              Code Portfolio
            </Link>
          </div>
        </div>
        <Social />
      </motion.div>
    </>
  );
}

export default Home;
