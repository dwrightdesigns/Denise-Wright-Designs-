import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

const Research = styled.div`
  background-image: radial-gradient(circle at center, #f50000 0%, #870000 100%);
  color: var(--light-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
      padding-top: 1rem;
  }

  section {
      display:flex;
      justify-content: center;
      align-items: center;
      padding: 0 3rem 3rem 3rem;
  }
.quote-box {
  display: flex;
  @media screen and (max-width: 840px) {
    flex-direction: column;
  }
  
  .quotes {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-image: radial-gradient(
      circle at center,
      #ffffff 0%,
      #c4c4c4 100%);
    display: flex;
    align-items: center;
    padding: 1rem;
    height: 250px;
    max-width: 475px;
    margin: 1rem;
    @media screen and (max-width: 460px) {
      flex-direction: column;
      height: 100%;
      width: 100%;
    }

      .content {
          color: var(--dark-color);
          text-align:left;
          padding: 1rem;
          
          
        p {
          font-size: 14px;
        }
        span{
          font-weight: bold;
        }
      }

      img {
        border-radius:50%;
        width:100px;
        height:100px;
        object-fit: cover;
      }
    );
  }
}
`;

const Casestudy = styled.div`
  background: rgba(51, 51, 51, 51);
`;

const Intro = styled.section`
  background: var(--light-color);
  display: flex;
  padding: 3rem;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 648px) {
    flex-direction: column;
  }

  .info {
    text-align: justify;
    padding: 3rem 0 3rem 3rem;
    @media screen and (max-width: 840px) {
      padding: 1rem 0 0 0;
    }

    h2 {
      padding-bottom: 1rem;
    }
    p {
      font-size: 1.2rem;
      line-height: 2rem;
    }
  }
`;

const Slides = styled.div`
  background-image: url("/img/portfolio/casestudy/marble.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 2rem;

  .slick-slider {
    margin: auto;
    height: 100%;
    width: 400px;
    @media screen and (max-width: 640px) {
      padding: 1rem;
      width: 100%;
      height: 100%;
    } 

    .slick-dots li {
      @media screen and (max-width: 640px) {
        display: none;
      }
    }

    .slick-prev:before,
    .slick-next:before {
      color: var(--dark-color);
      font-size: 2rem;
      @media screen and (max-width: 760px) {
        display: none;
      }
    }
    .slick-list {
      max-width: 1000px;
      height: 100%;
      margin: auto;

      .slick-track {
        height: 100%;
        margin: auto;
      }
    }
  }

  .slides-bg {
    background: rgba(255, 255, 255, 0.75);
    padding: 2rem;
    max-width: 1000px;
    margin: auto;

    img {
      max-width: 300px;
    }

    h3 {
      padding-bottom: 1rem;
      letter-spacing: 0.1rem;
      font-size: 1.4rem;
      max-width: 600px;
      margin: auto;
    }
  }

  .slides {
    img {
      width: 200px;
      padding: 1rem;
    }
  }
`;

const Hmw = styled.div`
  padding: 2rem;

  img {
    max-width: 420px;
  }
  div {
    background: rgba(255, 255, 255, 0.75);
    padding: 2rem;
    max-width: 1000px;
    margin: auto;

    p {
      font-size: 2rem;
      max-width: 480px;
      margin: auto;
      @media screen and (max-width: 640px) {
        font-size: 1.3rem
      }
    }
  }
`;

const NextSteps = styled.div`
  background-image: url("/img/portfolio/casestudy/eaters.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 2rem;
  width: 100%;

  .slides-bg {
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.75);
    padding: 2rem;
    max-width: 100%;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }

    h1 {
      font-family: "Caveat", cursive;
      font-weight: normal;
      text-align: center;
      font-size: 3rem;
      @media screen and (max-width: 640px) {
        font-size: 2rem;
      }
    }

    h3 {
      padding: 2rem 0 2rem 0;
      @media screen and (max-width: 640px) {
        padding: 1rem 0  1rem 0;
        font-size: 1rem;
      }
    }

    ul li {
      font-size: 1.2rem;
      line-height: 3rem;
      color: #e02b20;
      list-style: none;
      padding: 0 0 1rem 0;
      @media screen and (max-width: 640px) {
        line-height: 2rem;
        font-size: 1rem;
      }
    }
  }

  .img {
    max-width: 200px;
    margin: auto;
  }
`;

const Footer = styled.div`
  background-image: radial-gradient(circle at center, #f5a700 0%, #936900 100%);
  padding: 4rem;
  color: var(--light-color);
  font-family: "Caveat", cursive;
  font-size: 2rem;
  text-shadow: 0em 0.1em 0.1em rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 640px) {
    font-size: 1.2rem;
    padding: 2rem;
  }

  h1 {
    font-weight: 400;
    max-width: 1100px;
    display: flex;
    margin: auto;
  }
`;

const Navigation = styled.div`
  padding: 2rem;
`;

function CaseStudy(props) {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Casestudy>
        <Intro className="intro">
          <div>
            <img src="/img/portfolio/mealpress.png" alt="MealPress Logo" />
          </div>
          <div className="info">
            <h2>
              Households need a better way to organize and plan their meals.
            </h2>
            <p>
              MealPress makes shopping, planning and preparing meals easier,
              giving users more time to spend with their family and less time
              stressing over all of the time consuming preparation.
            </p>
          </div>
        </Intro>
        <Slides>
          <div className="slides-bg">
            <h3>
              MealPress provides an easy to use platform that makes organizing
              fun and inviting.
            </h3>
            <Slider {...settings}>
              <img
                src="img/portfolio/casestudy/recipebook.jpg"
                alt="Recipe Book Slide"
              />
              <img
                src="img/portfolio/casestudy/mealplan.jpg"
                alt="Meal Plan Slide"
              />
              <img
                src="img/portfolio/casestudy/pantry.jpg"
                alt="Inventory Slide"
              />
              <img
                src="img/portfolio/casestudy/grocerylist.jpg"
                alt="Grocery List Slide"
              />
            </Slider>
          </div>
        </Slides>
        <Research>
          <h1>Research</h1>
          <section className="quote-box">
            <div className="quotes">
              <img src="/img/portfolio/casestudy/nadine.jpg" alt="" />

              <div className="content">
                <p>
                  I'm not one to give my life over to technology. I can see,
                  however, the benefits of this and how it could really simplify
                  the whole process for me.
                </p>
                <br />
                <span>Nadine B.</span>
              </div>
            </div>
            <div className="quotes">
              <img src="/img/portfolio/casestudy/shawna.jpg" alt="" />

              <div className="content">
                <p>
                  I really like the layout and the setup of everything. Overall
                  I would definitely download and use this app.
                </p>
                <br />
                <span>Shawna C.</span>
              </div>
            </div>
          </section>
        </Research>
        <Hmw>
          <div>
            <img
              src="/img/portfolio/casestudy/olly.png"
              alt="Olly the Apricot"
            />
            <p>
              How might we help households get organized with the prepping,
              shopping, and cooking process?
            </p>
          </div>
        </Hmw>
        <Navigation>
          <img src="/img/portfolio/casestudy/navigation.jpg" alt="" />
        </Navigation>
        <NextSteps>
          <div className="slides-bg">
            <section>
              <h1>What's Next?</h1>
              <h3>We need to continue...</h3>
              <ul>
                <li>- Improving wireframes and design flow</li>
                <li>- Getting user feedback on existing wireframes</li>
                <li>
                  - Making sure we are solving all of the users' pain points
                </li>
              </ul>
              <h3>What still needs to be done...</h3>
              <ul>
                <li>- High-fidelity wireframing</li>
                <li>- Prototyping and user testing</li>
              </ul>
            </section>
          </div>
        </NextSteps>
        <Footer>
          <h1>
            MealPress puts the power of organization into the hands of everyday
            people.
          </h1>
        </Footer>
      </Casestudy>
    </>
  );
}

export default CaseStudy;
