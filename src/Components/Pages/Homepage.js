import React from "react";
import "./Homepage.css";
import NavBar from "../Navbar/Navbar";
import { BsStar } from "react-icons/bs";
import Carousel from "react-elastic-carousel";

const Homepage = () => {
  return (
    <>
      <div className="container">
        <div className="nav">
          <NavBar />
        </div>
        <div className="section1">
          <div className="hero-row">
            <div className="hero-column">
              <h1 className="hero-title">
                Healthy life with
                <br /> <span>Nature Organic</span>
              </h1>
              <p className="subtitle">
                Vegetables are the edible parts of a plant <br /> that is used
                in cooking or can be eaten now.
              </p>
              <button>Explore Now</button>
            </div>
            <div className="hero-column">
              <div className="img-back">
                <img src="./asset/Group 228.png" alt="" />
              </div>
              <div className="img-front">
                <img src="./asset/Group 195.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="section2-img">
            <img src="./asset/Group 114.png" alt="" />
          </div>
          <div className="heading">
            <h1 className="title">Welcome to Nature</h1>
            <p className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
              <br /> incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <ul className="section2-cards">
            <li className="card">
              <img
                src="./asset/group 207.png"
                onMouseOver={(e) =>
                  (e.currentTarget.src = "./asset/group 205.png")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = "./asset/group 207.png")
                }
                alt=""
              />
            </li>
            <li className="card">
              <img
                src="./asset/group 207.png"
                onMouseOver={(e) =>
                  (e.currentTarget.src = "./asset/group 205.png")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = "./asset/group 207.png")
                }
                alt=""
              />
            </li>
            <li className="card">
              <img
                src="./asset/group 207.png"
                onMouseOver={(e) =>
                  (e.currentTarget.src = "./asset/group 205.png")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = "./asset/group 207.png")
                }
                alt=""
              />
            </li>
            <li className="card">
              <img
                src="./asset/group 207.png"
                onMouseOver={(e) =>
                  (e.currentTarget.src = "./asset/group 205.png")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = "./asset/group 207.png")
                }
                alt=""
              />
            </li>
          </ul>
        </div>
        <div className="section3">
          <div className="heading">
            <h1 className="title">Proudly presented by</h1>
            <p className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
              <br /> incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <Carousel
            itemsToshow={1}
            showArrows={false}
            className="carousel"
            enableMouseSwipe={false}
          >
            <ul className="section3-logos">
              <li className="logo">
                <img src="./asset/Group 39.png" alt="" />
              </li>
              <li className="logo">
                <img src="./asset/Group 64.png" alt="" />
              </li>
              <li className="logo">
                <img src="./asset/Group 55.png" alt="" />
              </li>
              <li className="logo">
                <img src="./asset/Group 64.png" alt="" />
              </li>
              <li className="logo">
                <img src="./asset/Group 39.png" alt="" />
              </li>
            </ul>
            <ul className="section3-logos">
              <li className="logo">
                <img src="./asset/Group 39.png" alt="" />
              </li>
              <li className="logo">
                <img src="./asset/Group 64.png" alt="" />
              </li>
              <li className="logo">
                <img src="./asset/Group 55.png" alt="" />
              </li>
              <li className="logo">
                <img src="./asset/Group 64.png" alt="" />
              </li>
              <li className="logo">
                <img src="./asset/Group 39.png" alt="" />
              </li>
            </ul>
            <ul className="section3-logos">
              <li className="logo">
                <img src="./asset/Group 39.png" alt="" />
              </li>
              <li className="logo">
                <img src="./asset/Group 64.png" alt="" />
              </li>
              <li className="logo">
                <img src="./asset/Group 55.png" alt="" />
              </li>
              <li className="logo">
                <img src="./asset/Group 64.png" alt="" />
              </li>
              <li className="logo">
                <img src="./asset/Group 39.png" alt="" />
              </li>
            </ul>
            <ul className="section3-logos">
              <li className="logo">
                <img src="./asset/Group 39.png" alt="" />
              </li>
              <li className="logo">
                <img src="./asset/Group 64.png" alt="" />
              </li>
              <li className="logo">
                <img src="./asset/Group 55.png" alt="" />
              </li>
              <li className="logo">
                <img src="./asset/Group 64.png" alt="" />
              </li>
              <li className="logo">
                <img src="./asset/Group 39.png" alt="" />
              </li>
            </ul>
          </Carousel>
        </div>
        <div className="section4">
          <img src="./asset/Group 86.png" alt="" className="img-quotes" />
          <Carousel
            itemsToShow={1}
            showArrows={false}
            enableMouseSwipe={false}
            className="review-carousel"
          >
            <div className="review-card">
              <img
                src="./asset/woman-in-brown-jacket-and-black-shirt-3484683@3x.jpg"
                alt=""
                className="customer-img"
              />
              <h2 className="customer-name">Jane Doe</h2>
              <div className="stars">
                <BsStar size="24px" color="#00dbd0" className="st-icon" />
                <BsStar size="24px" color="#00dbd0" className="st-icon" />
                <BsStar size="24px" color="#00dbd0" className="st-icon" />
                <BsStar size="24px" color="#00dbd0" className="st-icon" />
                <BsStar size="24px" color="#00dbd0" className="st-icon" />
              </div>
              <p className="review">
                Thank you for all the amazing produce and products you deliver
                each week…
                <br /> you make my life so easy an bring goodness into our
                family eating.
                <br /> I’ve been roasting a lot of brussel sprouts and
              </p>
            </div>
            <div className="review-card">
              <img
                src="./asset/woman-in-brown-jacket-and-black-shirt-3484683@3x.jpg"
                alt=""
                className="customer-img"
              />
              <h2 className="customer-name">Jane Doe</h2>
              <div className="stars">
                <BsStar size="24px" color="#00dbd0" className="st-icon" />
                <BsStar size="24px" color="#00dbd0" className="st-icon" />
                <BsStar size="24px" color="#00dbd0" className="st-icon" />
                <BsStar size="24px" color="#00dbd0" className="st-icon" />
                <BsStar size="24px" color="#00dbd0" className="st-icon" />
              </div>
              <p className="review">
                Thank you for all the amazing produce and products you deliver
                each week…
                <br /> you make my life so easy an bring goodness into our
                family eating.
                <br /> I’ve been roasting a lot of brussel sprouts and
              </p>
            </div>
            <div className="review-card">
              <img
                src="./asset/woman-in-brown-jacket-and-black-shirt-3484683@3x.jpg"
                alt=""
                className="customer-img"
              />
              <h2 className="customer-name">Jane Doe</h2>
              <div className="stars">
                <BsStar size="24px" color="#00dbd0" className="st-icon" />
                <BsStar size="24px" color="#00dbd0" className="st-icon" />
                <BsStar size="24px" color="#00dbd0" className="st-icon" />
                <BsStar size="24px" color="#00dbd0" className="st-icon" />
                <BsStar size="24px" color="#00dbd0" className="st-icon" />
              </div>
              <p className="review">
                Thank you for all the amazing produce and products you deliver
                each week…
                <br /> you make my life so easy an bring goodness into our
                family eating.
                <br /> I’ve been roasting a lot of brussel sprouts and
              </p>
            </div>
            <div className="review-card">
              <img
                src="./asset/woman-in-brown-jacket-and-black-shirt-3484683@3x.jpg"
                alt=""
                className="customer-img"
              />
              <h2 className="customer-name">Jane Doe</h2>
              <div className="stars">
                <BsStar size="24px" color="#00dbd0" className="st-icon" />
                <BsStar size="24px" color="#00dbd0" className="st-icon" />
                <BsStar size="24px" color="#00dbd0" className="st-icon" />
                <BsStar size="24px" color="#00dbd0" className="st-icon" />
                <BsStar size="24px" color="#00dbd0" className="st-icon" />
              </div>
              <p className="review">
                Thank you for all the amazing produce and products you deliver
                each week…
                <br /> you make my life so easy an bring goodness into our
                family eating.
                <br /> I’ve been roasting a lot of brussel sprouts and
              </p>
            </div>
          </Carousel>
          <div className="sub">
            <h1 className="title">Subscribe to Our Newsletter</h1>
            <p className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="email">
              <input type="text" placeholder="Enter your email address " />
              <button className="subscribe">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="section5">
          <div className="blog">
            <div className="blog-img">
              <img src="./asset/Group 114.png" alt="" />
            </div>
            <h1 className="title">Read Our Blog</h1>
            <p className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
              <br /> incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <ul className="blog-cards">
            <li className="blog-card">
              <img
                src="./asset/eucalyptus-essential-oil-soap-green-background-zero-waste-natural-organic-bathroom-tools_80743-2766@2x.jpg"
                alt=""
              />

              <h3 className="blog-title">Blog Post One</h3>
              <p className="blog-description">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit, sed
                <br /> do eiusmod.
              </p>
              <a href="./Homepage.js" className="read-more">
                Read More
              </a>
              <div className="line"></div>
            </li>
            <li className="blog-card">
              <img
                src="./asset/containers-with-products-table-with-copy-space_23-2148366089@2x.jpg"
                alt=""
              />
              <h3 className="blog-title">Blog Post One</h3>
              <p className="blog-description">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit, sed
                <br /> do eiusmod.
              </p>
              <a href="Homepage.js" className="read-more">
                Read More
              </a>
              <div className="line"></div>
            </li>
            <li className="blog-card">
              <img
                src="./asset/potted-plant-near-cosmetics-bottles-jars_23-2147787938@2x.jpg"
                alt=""
              />
              <h3 className="blog-title">Blog Post One</h3>
              <p className="blog-description">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit, sed <br />
                do eiusmod.
              </p>
              <a href="Homepage.js" className="read-more">
                Read More
              </a>
              <div className="line"></div>
            </li>
          </ul>
        </div>
        <div className="footer">
          <div className="footer-container">
            <div className="footer-head">
              <img src="./asset/Group 225.png" alt="" className="footer-logo" />
              <p className="footer-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                <br /> elit, sed do eiusmod tempor
              </p>
              <div className="footer-line1"></div>
              <p className="footer-copyright"> © Copyright 2020 Nature </p>
            </div>
            <div className="footer-info">
              <h3 className="info-head">Information</h3>
              <div className="footer-line2"></div>
              <ul className="info-list">
                <li className="info-items">
                  <li className="info-item">About Us</li>
                  <li className="info-item">Products</li>
                  <li className="info-item">Contact Us</li>
                  <li className="info-item">Terms of Service</li>
                </li>
                <li className="info-items">
                  <li className="info-item">About Us</li>
                  <li className="info-item">Products</li>
                </li>
              </ul>
            </div>
            <div className="socials">
              <h3 className="follow">Follow Us</h3>
              <div className="footer-line2"></div>
              <ul className="socials-items">
                <li className="socials-item">
                  <img src="./asset/Group 99.png" alt="" />
                </li>
                <li className="socials-item">
                  <img src="./asset/Group 100.png" alt="" />
                </li>
                <li className="socials-item">
                  <img src="./asset/twitter logo.png" alt="" />
                </li>
                <li className="socials-item">
                  <img src="./asset/Group 105.png" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
