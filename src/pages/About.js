import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import aboutSliderImage from '../images/About/slider1.png'; 
import "../Styles/About.css";

const SliderContainer = () => {
  return (
    <div className="sliderContainers">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active indicators"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1" className="indicators"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2" className="indicators"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={aboutSliderImage} alt="First slide" style={{ height: "100vh" }} />
            <div className="sliderContent">
              <p>
                
              </p>
              <p>
                
              </p>
              <button><strong>Get Started</strong></button>
            </div>
          </div>
          {/* Add more carousel-item divs here for additional slides */}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

const About = () => {
    return (
      <div className='home'>
        <SliderContainer />
        <NavBar />
      </div>
    );
  };
  
  export default About;