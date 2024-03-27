// Home.js
import React, { Component,useState } from 'react';
import NavBar from '../components/NavBar';
import '../Styles/Home.css';
import Earth from '../images/Home/Earth.jpg';
import Mobile from '../images/Home/Mobile1.png';
import Career from '../images/Home/career.png';
import Contacting from '../images/Home/contacting.png';
import Service1 from '../images/Home/Service1.png';
import Service2 from '../images/Home/Service2.png';
import Service3 from '../images/Home/Service3.png';
import Insight from '../images/Home/Insights.png';
import robo from '../images/Careers/robo.jpeg';
import building from '../images/Careers/building.jpeg';
import security from '../images/Home/Security.png';

const SliderContainer = () => {
  return (
    <div className="sliderContainers">
        <img
          src={Earth}
          alt="Earth"
          className="sliderImage" />
        <span className='content'>
        <h1>Building an Innovative Future</h1>
     
        <p> We're all about the latest in research and development, focusing on new ideas and helping the next generation of leaders. Our passion lies in advancing science and technology while supporting students in their studies and careers.</p>
        <button className='contentbutton'>
          Discover PSI
        <div class="arrow-wrapper">
        <div class="arrow"></div>
        </div>
        </button>
        </span>
    </div>
  );
};
const Contact = () => {
  return (
    <div className="contactSection">
      <div className="contactCard">
        <div className="contactCardContent">
          <h3 className="contactTitle">Guarding the Gateway to Your Digital World.</h3>
          <p className="contactDescription">Competitive coding refers to the practice of solving algorithmic and coding problems within a specified time limit, often in a competitive environment such as coding contests or online platforms. The primary goal is to write efficient and correct code to solve a given problem statement.</p>
          <button className='contactbutton'> Contact PSI
  <div class="arrow-wrapper">
      <div class="arrow"></div>
      </div>
      </button>
        </div>
        <img className="contactImage" src={Contacting} alt="contact Image" />
      </div>
    </div>
  );

};

  // const Provide = () => {
  //   return(
        
  //       <div className='provide'>
  //           <h1 className='provide_h'>Services</h1>
    
  //       </div>
      

  //   );

  // };
  const Provide = () => {
    return (
      <div className='provide'>
        <h1 className='provide_h'>Services</h1>
        <div className="image-container">
          <div className="service-item">
            <img src={Service1} alt="Image 1" className="service-image" />
            <div className="image-content">
              <h1>Data Security </h1>
              <p>One of the most widely known and implemented standards is the Payment Card Industry Data Security Standard (PCI DSS), which focuses on securing credit card information.</p>
              <button className='s-button'>Read More<div class="arrow-wrapper">
      <div class="arrow"></div>
      </div></button>
            </div>
          </div>
          <div className="service-item">
            <img src={Service2} alt="Image 2" className="service-image" />
            <div className="image-content">
            <h1>Digital Marketing </h1>
              <p>One of the most widely known and implemented standards is the Payment Card Industry Data Security Standard (PCI DSS), which focuses on securing credit card information.</p>
              <button className='s-button'>Read More<div class="arrow-wrapper">
      <div class="arrow"></div>
      </div></button>
            </div>
          </div>
          <div className="service-item">
            <img src={Service3} alt="Image 3" className="service-image" />
            <div className="image-content">
            <h1>Internet of Things </h1>
              <p>One of the most widely known and implemented standards is the Payment Card Industry Data Security Standard (PCI DSS), which focuses on securing credit card information.</p>
              <button className='s-button'>Read More<div class="arrow-wrapper">
      <div class="arrow"></div>
      </div></button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const Featured = () => {
    return (
      <div className="eventsSection">
        <div className="eventCard">
          <div className="eventCardContent">
            <p className='eventtype'>#spotlight</p>
            <h3 className="eventTitle">Competitive Coding </h3>
            <p className="eventDescription">Competitive coding refers to the practice of solving algorithmic and coding problems within a specified time limit, often in a competitive environment such as coding contests or online platforms. The primary goal is to write efficient and correct code to solve a given problem statement.</p>
            <button className='eventbutton'>Read More
    <div class="arrow-wrapper">
        <div class="arrow"></div>
        </div>
        </button>
          </div>
          <img className="eventImage" src={Mobile} alt="Event Image" />
        </div>
      </div>
    );
  
  };
  const Careers = () => {
   return(

    <div className="careersSection">
        <h2 className="careersHeading">Careers</h2>
        <div className="imageContainer">
          <img src={Career} alt="Earth" className="careerImage" />
        </div>
        <div className="descriptionBox">
          <h1>Careers</h1>
          <p>
          One of the most widely known and implemented standards is the Payment Card Industry Data Security Standard (PCI DSS), which focuses on securing credit card information. One of the most widely known and implemented standards is the Payment Card Industry Data Security Standard (PCI DSS), which focuses on securing credit card information. 
          </p>
          <button className='cbutton'>Careers
          <div class="arrow-wrapper">
        <div class="arrow"></div>
        </div></button>
          
        </div>
    </div>
  );
};
const Insights = () => {
  const [activeTab, setActiveTab] = useState("updates");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs" >
      <h1 style={{textAlign:'left',fontSize:'50px',marginLeft:'20px'}}>Insights</h1>
       {/* <div className="tabs_background">
    <img src={Insight} alt='Insights' />
    </div> */}
      <ul className="nav_tab">
        <li
          className={activeTab === "updates" ? "active" : ""}
          onClick={() => handleClick("updates")}
        >
          Updates
        </li>
        <li
          className={activeTab === "investors" ? "active" : ""}
          onClick={() => handleClick("investors")}
        >
          Investors
        </li>
        <li
          className={activeTab === "events" ? "active" : ""}
          onClick={() => handleClick("events")}
        >
          Events
        </li>
      </ul>
  
        <div className={activeTab === "updates" ? "content__pane active" : "content__pane"}>
          <div className='cardtab_container'>
            <div className="card_tab">
              <img src={robo} alt="Internship Updates" /> {/* Replace with your image path and alt text */}
              <div className="card_desc">
                <h1>
                  Internship Updates <br />
                  2024
                </h1>
                <p>
                  14th Mar 2024
                </p>
              </div>
            </div>
            <div className="card_tab">
              <img src={building} alt="Internship Updates" /> {/* Replace with your image path and alt text */}
              <div className="card_desc">
                <h1>
                  Web Technologies Updates <br />
                  2024
                </h1>
                <p>
                  14th Mar 2024
                </p>
              </div>
            </div>
            <div className="card_tab">
              <img src={security} alt="Internship Updates" /> {/* Replace with your image path and alt text */}
              <div className="card_desc">
                <h1>
                  Internship Updates <br />
                  2024
                </h1>
                <p>
                  14th Mar 2024
                </p>
              </div>
            </div>
            <div className="card_tab">
              <img src={Contacting} alt="Internship Updates" /> {/* Replace with your image path and alt text */}
              <div className="card_desc">
                <h1>
                  Internship Updates <br />
                  2024
                </h1>
                <p>
                  14th Mar 2024
                </p>
              </div>
            </div>
          </div>
          </div>
      
        
        <div className={activeTab === "investors" ? "content__pane active" : "content__pane"}>
        <div className='cardtab_container'>
            <div className="card_tab">
              <img src={robo} alt="Internship Updates" /> {/* Replace with your image path and alt text */}
              <div className="card_desc">
                <h1>
                  Internship Updates <br />
                  2024
                </h1>
                <p>
                  14th Mar 2024
                </p>
              </div>
            </div>
            <div className="card_tab">
              <img src={building} alt="Internship Updates" /> {/* Replace with your image path and alt text */}
              <div className="card_desc">
                <h1>
                  Web Technologies Updates <br />
                  2024
                </h1>
                <p>
                  14th Mar 2024
                </p>
              </div>
            </div>
            <div className="card_tab">
              <img src={security} alt="Internship Updates" /> {/* Replace with your image path and alt text */}
              <div className="card_desc">
                <h1>
                  Internship Updates <br />
                  2024
                </h1>
                <p>
                  14th Mar 2024
                </p>
              </div>
            </div>
            <div className="card_tab">
              <img src={Contacting} alt="Internship Updates" /> {/* Replace with your image path and alt text */}
              <div className="card_desc">
                <h1>
                  Internship Updates <br />
                  2024
                </h1>
                <p>
                  14th Mar 2024
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={activeTab === "events" ? "content__pane active" : "content__pane"}>
        <div className='cardtab_container'>
            <div className="card_tab">
              <img src={robo} alt="Internship Updates" /> {/* Replace with your image path and alt text */}
              <div className="card_desc">
                <h1>
                  Internship Updates <br />
                  2024
                </h1>
                <p>
                  14th Mar 2024
                </p>
              </div>
            </div>
            <div className="card_tab">
              <img src={building} alt="Internship Updates" /> {/* Replace with your image path and alt text */}
              <div className="card_desc">
                <h1>
                  Web Technologies Updates <br />
                  2024
                </h1>
                <p>
                  14th Mar 2024
                </p>
              </div>
            </div>
            <div className="card_tab">
              <img src={security} alt="Internship Updates" /> {/* Replace with your image path and alt text */}
              <div className="card_desc">
                <h1>
                  Internship Updates <br />
                  2024
                </h1>
                <p>
                  14th Mar 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    
  );


}
class Home extends Component {
  render() {
    return (
      <div className='home'>
        <SliderContainer />
        <NavBar />
        <Contact />
        <Provide />
        <Featured />
        <Careers />
        <Insights />
      </div>
    );
  }
}

export default Home;
