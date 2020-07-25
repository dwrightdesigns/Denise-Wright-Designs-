import React from "react";
import { withRouter } from "react-router-dom";
import Social from "./Social";
import styled from "styled-components";

const StyledMenu = styled.nav`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  width: 400px;
  background: var(--main-color);
  border-right: 10px solid white;
  z-index: 1;


  .social {
    color: var(--dark-color);
    padding: 0 0 3rem 3rem;
    display: block;

    p {
      padding-bottom: 0.5rem;
    }

    ul {
      display: flex;
      align-items: center;
    }

    li {
      font-size: 2rem;
      width: 36px;
      list-style-type: none;

      a {
        color: var(--dark-color);

        i{
          transition-property: all;
          transition-duration: 1s;
          transition-timing-function: linear;

          &:hover {
            color: var(--light-color);
            cursor: pointer;
            transform: rotateY(360deg);
          }
        }
      }
    }
  }

  .logo_wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    height: 20vh;
    justify-content: center;
    
    .logo {
      padding: 1rem;
      width: 368px;
    }
  }

  .nav-links { 
    display: flex;
    width: 100%;
    height: 100%;
    position: fixed
    flex-direction: column;
    flex-flow: column nowrap;
    padding: 3rem 0 0 3rem;
    line-height: 2.5rem;
    color: var(--dark-color);
    list-style-type: none;

    .links {
      color: var(--dark-color);
      text-decoration: none;
      font-size: 1.2rem;
      text-transform: uppercase;
      background: none;
      border: none;
      cursor: pointer;
      outline: none;
      font-family: "Spectral", serif;

      &:hover {
        color: var(--light-color);
      }
    }
  }

  @media screen and (max-width: 1140px) {
    height: 10vh;
    width: 100%;
    border-right: none;
    
    &:after {
      display: none;
    }

    .social {
      display: none;
    }

    .logo_wrapper {
      width: 380px;
      @media screen and (max-width:1140px) {
        width:200px;
      }

      .logo {
        width: 300px;
        padding: 0;
        @media screen and (max-width:1140px) {
          width:175px;
        }
      }
    }

    .nav-links {
      align-items: center;
      flex-flow: row nowrap;
      justify-content: space-evenly;
      background: var(--dark-color);
      position: absolute;
      transform-origin: top;
      transform: ${({ open }) => (open ? "scale(1)" : "scale(0)")};
      top: 10vh;
      height: 4rem;
      width: 100%;
      padding: 1rem;
      transition: transform 0.5s ease-in-out;
      border-top 10px solid white;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25); 

      .links {
        color: var(--light-color);

        &:hover {
          color: var(--comp-color);
        }
      }
    }
  }

  @media screen and (max-width: 648px) {
    .nav-links{
      flex-direction: column;
      flex-flow: column nowrap;
      height: 15rem;
    }
  }
`;

const Menu = ({ open, closeMenu, history }) => {
  const changePage = (e, path) => {
    e.preventDefault();
    closeMenu();
    history.push(path);
  };

  return (
    <>
      <StyledMenu open={open}>
        <div className="logo_wrapper">
          <a href="/">
            <img
              className="logo"
              src="./img/dwrightdesigns-logo.png"
              alt="denise wright designs logo"
            />
          </a>
        </div>
        <ul className="nav-links" open={open}>
          <li>
            <button className="links" onClick={(e) => changePage(e, "/design")}>
              Design
            </button>
          </li>
          <li>
            <button className="links" onClick={(e) => changePage(e, "/code")}>
              Code
            </button>
          </li>
          <li>
            <a rel="noopener noreferrer" className="links" target="_blank" href="https://wrightphotography.pixieset.com/">
              Photography
            </a>
          </li>
          <li>
            <button className="links" onClick={(e) => changePage(e, "/about")}>
              About
            </button>
          </li>
          <li>
            <button
              className="links"
              onClick={(e) => changePage(e, "/contact")}
            >
              Contact
            </button>
          </li>
        </ul>
        <Social />
      </StyledMenu>
    </>
  );
};

export default withRouter(Menu);
