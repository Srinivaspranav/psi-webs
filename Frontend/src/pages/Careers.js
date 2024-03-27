// Home.js
import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import "../Styles/Careers.css"
import cover from '../images/Careers/cover.png';
import careervideo from '../images/Careers/career.mp4';
import robo from '../images/Careers/robo.jpeg'
import building from '../images/Careers/building.jpeg'
import pattern from '../images/Careers/pattern.jpeg'
import employee from '../images/Careers/employee.jpeg'




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
                <img className="d-block w-100" src={cover} style={{height:"100vh"}} alt="First slide"/>
                <div className='sliderContent'>
                  <p>
                  Forge Your Path, Fuel Your Passion:
                  </p>
                  <p>
                  Careers Unlimited
                  </p>
                  <button><strong>Start your Journey ---></strong></button>
                </div>
            </div>
            {/* <div className="carousel-item">
                <img className="d-block w-100" src={cover} style={{height:"100vh"}} alt="Second slide"/>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src={cover} style={{height:"100vh"}} alt="Third slide"/>
            </div> */}
        </div>
            {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a> */}
        </div>
    </div>
  );
};

const Career = () => {
  return(

   <div className="careerSection">
       <div className='leftpart'>
        <p className='heading'><span>Careers </span> with PSI</p>
        <p className='subheading'>Are you ready to embark on a journey of innovation and exploration? Joining Dr. Pallem Setti Innovations means becoming part of a dynamic team dedicated to pushing the boundaries of research and development.</p>
        <button>Join us --></button>
       </div>
       <div className='rightpart'>
        <video autoPlay loop>
          <source src={careervideo} type="video/mp4" />
          {/* <source src="movie.ogg" type="video/ogg" /> */}
          Your browser does not support the video tag.
        </video>
       </div>
   </div>
 );
};


const Offer = () =>{
  return(
    <div className='offer'>
      <p className='heading1'>What we <span>Offer?</span></p>
      <div className='cardContainer'>
        <div className='card'>
          <img src={robo} />
          <div className='cardtext'>
            <h1>
              Internship Updates
            <br/>
              2024
            </h1>
            <p>
              14th Mar 2024
            </p>
          </div>
        </div>
        <div className='card'>
          <img src={building} />
          <div className='cardtext'>
            <h1>
            Web Tech Updates
            <br/>
              2024
            </h1>
            <p>
              14th Mar 2024
            </p>
          </div>
        </div>
        <div className='card'>
          <img src={pattern} />
          <div className='cardtext'>
            <h1>
              Security Updates
            <br/>
              2024
            </h1>
            <p>
              14th Mar 2024
            </p>
          </div>
        </div>
        <div className='card'>
          <img src={employee} />
          <div className='cardtext'>
            <h1>
              Patch Notes Updates
            <br/>
              2024
            </h1>
            <p>
              14th Mar 2024
            </p>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <p style={{fontSize:'24px'}}>J o i n  <span style={{marginLeft:"1vw"}}>u s</span></p>
      <div style={{display:"flex"}}>
        <div className='joinusleft'>
          <h1>Entry <span>Level</span></h1>
          <p>As a member of our team, you'll have the opportunity to work on cutting-edge projects that shape the future of science and technology. </p>
          <button>Explore --></button>
        </div>
        <div className='vl'> </div>
        <div  className='joinusright'>
          <h1>Lateral <span>Hiring</span></h1>
          <p>From developing groundbreaking inventions to refining existing systems, your contributions will have a meaningful impact.</p>
          <button>Apply Now --></button>
        </div>
      </div>
    </div>
  );
};


const OurPeople=()=>{
  return(
    <div className='OP'>
      <div className='ourpeople'>
        <p>Our <span>People</span></p>
      </div>
      <br/>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <img className='opimg' src={robo} />
        <img className='opimg' src={robo} />
        <img className='opimg' src={robo} />
        <img className='opimg' src={robo} />
      </div>
    </div>
  );
};



class Careers extends Component {
  render() {
    return (
      <div >
        <SliderContainer />
        <NavBar />
        <Career/>
        <Offer />
        <OurPeople />  
      </div>
    );
  }
}

export default Careers;
