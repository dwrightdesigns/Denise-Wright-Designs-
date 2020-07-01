import React from "react";
import Social from "./Social";
import { motion } from "framer-motion";

function Contact(props) {
  return (
    <>
      <motion.div
        className="wrapper"
        initial={props.initial}
        animate={props.animate}
        exit={props.exit}
        transition={props.transition}
        variants={props.variants}
      >
        <header>
          <h3>CONTACT</h3>
          <p className="skewed-box">stay in touch</p>
        </header>
        <div className="denise"></div>
        <div className="contact">
          <p>
            You can reach me at
            <a href="mailto:denise@denisewrightdesigns.com">
              denise@denisewrightdesigns.com
            </a>
            or follow me on one of the social networks on this page.
          </p>
        </div>
        <Social />
      </motion.div>
    </>
  );
}

export default Contact;
