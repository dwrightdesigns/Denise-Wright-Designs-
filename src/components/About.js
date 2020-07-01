import React from "react";
import { motion } from "framer-motion";

function About(props) {
  return (
    <>
      <motion.div className="wrapper" initial={props.initial} animate={props.animate} exit={props.exit} transition={props.transition} variants={props.variants}>
        <header>
          <h3>ABOUT</h3>
          <p className="skewed-box">wife, mother, web developer</p>
        </header>
        <div className="content">
          <p>
            Imagine you are standing before two apple trees. One has been well
            maintained, the other has been neglected. People in general, whether
            they have an eye for design or not, are automatically drawn to the
            better looking, well maintained tree. That is my drive. To make
            people from all walks of life, look at, migrate towards and fall in
            love with every piece of design I create.
          </p>
          <section>
            <h4>My Work</h4>
            <p>
              At just 16 years old, I knew I loved to create. I knew I wanted to
              turn my hobby into a career. Many years later, and several
              projects behind me, I wasn’t satisfied with my career. I knew I
              needed to step up, add to my skillsets and take my career to the
              next level. UI/UX Design was the next step. Currently, I am a
              student at Kenzie Academy for UX Engineering and will graduate on
              July 23, 2020.
            </p>
          </section>

          <section>
            <h4>My Family</h4>
            <p>
              Aside from design, I always knew I wanted to be a wife and mom.
              Finally at 22 years old, I met the love of my life. We met each
              other in November 2011, started dating in January 2012, we were
              engaged in May 2012, and married that October. We added our son
              Ethan in 2013 and our daughter Addison in 2016. We live and thrive
              in Broken Arrow, Oklahoma.
            </p>
          </section>
        </div>
      </motion.div>
    </>
  );
}

export default About;
