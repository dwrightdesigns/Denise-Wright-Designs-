import React, { useState } from "react";
import styled from "styled-components";
import Menu from "./Menu";

const StyledBurger = styled.div`
  width: 2rem;
  height: 1.9rem;
  margin: auto 0;
  position: fixed;
  top: 3%;
  right: 5%;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  z-index: 2;

  flex-flow: column nowrap;

  div {
    display: none;
    width: 30px;
    height: 3px;
    background: #282728;
    border-radius: 5px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    z-index: 1000;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translate(100%)" : "translate(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media screen and (max-width: 1140px) {
    div {
      display: block;
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Menu open={open} closeMenu={() => setOpen(false)} />
    </>
  );
};

export default Burger;
