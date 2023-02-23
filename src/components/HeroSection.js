import React from "react";
import styled from "styled-components";

import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
const HeroSection = ({mydata}) => {

   const {name} = mydata
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="grids">
            <div className="hero-section-data">
              <p className="intro-data" style={
                {
                  marginLeft:"13px"
                }
              }>Welcome to</p>
              <h1>{name}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias atque temporibus veniam doloribus libero ad error
                omnis voluptates animi! Suscipit sapiente.
              </p>
              <NavLink to="/products">
                <Button>show now</Button>
              </NavLink>
            </div>
            {/* our homepage image  */}
            <div className="hero-section-image">
              <figure>
                <img
                  src="images/hero.jpg"
                  alt="hero-section-photo"
                  className="img-style"
                />
              </figure>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  padding: 12rem 0;
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .hero-section-data {
    p {
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
    .intro-data {
      margin-bottom: 0;
   
    }
  }
  .grids{
    display:flex;
    gap:9rem;
  }
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      text-align:center
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      right: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }

    .img-style {
      width: 90%;
      height: auto;
    }
  }
`;
export default HeroSection;
