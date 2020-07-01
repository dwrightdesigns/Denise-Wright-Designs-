import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Burger from "./components/Burger";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Code from "./components/CodePortfolio";
import Design from "./components/DesignPortfolio";
import { AnimatePresence, motion } from "framer-motion";
import CaseStudy from "./components/Casestudy";

const pageVariants = {
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "-100vh",
    scale: 1.2,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
    };
  }

  render() {
    return (
      <div className="container">
        <Burger />
        <AnimatePresence>
          <motion.div
            className="box"
            initial="out"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Switch>
              <Route exact path="/">
                <Home
                  variants={pageVariants}
                  transition={pageTransition}
                  initial="out"
                  animate="in"
                  exit="out"
                />
              </Route>
              <Route path="/design">
                <Design
                  variants={pageVariants}
                  transition={pageTransition}
                  initial="out"
                  animate="in"
                  exit="out"
                />
              </Route>
              <Route path="/code">
                <Code
                  variants={pageVariants}
                  transition={pageTransition}
                  initial="out"
                  animate="in"
                  exit="out"
                />
              </Route>
              <Route path="/about">
                <About
                  variants={pageVariants}
                  transition={pageTransition}
                  initial="out"
                  animate="in"
                  exit="out"
                />
              </Route>
              <Route path="/contact">
                <Contact
                  variants={pageVariants}
                  transition={pageTransition}
                  initial="out"
                  animate="in"
                  exit="out"
                />
              </Route>
              <Route path="/casestudy">
                <CaseStudy
                  variants={pageVariants}
                  transition={pageTransition}
                  initial="out"
                  animate="in"
                  exit="out"
                />
              </Route>
            </Switch>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }
}

export default App;
