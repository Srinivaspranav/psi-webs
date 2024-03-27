// Home.js
import React, { Component , useState }from 'react';
import { Link } from 'react-router-dom';
import "../Styles/NavBar.css";
import Logo from '../images/Contactus/logo.png';
import "../Styles/Contactus.css"
import CustomerCare from "../images/Contactus/image6.png";
import Mailus from "../images/Contactus/image7.png";
import Service from "../images/Contactus/image8.png";
import Location from "../images/Contactus/image9.png";


const  NavBar =() => {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
      if (active === "nav__menu") {
        setActive("nav__menu nav__active");
      } else setActive("nav__menu");
  
      // Icon Toggler
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    };
    return (
      <nav className="nav">
        <div className='logo' >
        <a href="/" className="nav__brand">
        <img
          alt="Logo"
          src= {Logo}
          style={{ height: '30px', width: '120px' }}  
        />
        </a>
      </div>
        
        <ul className={active}>
          <li className="nav__item">
            <a href="/" className="nav__link" style={{color:"black"}}>
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="/Services" className="nav__link" style={{color:"black"}}>
              Services
            </a>
          </li>
          <li className="nav__item">
            <a href="/careers" className="nav__link" style={{color:"black"}}>
              Careers
            </a>
          </li>
          <li className="nav__item">
            <a href="/about" className="nav__link" style={{color:"black"}}>
              About 
            </a>
          </li>
          <li className="nav__item">
            <a href="/contact" className="nav__link" style={{color:"black"}}>
              Contact Us
            </a>
            
          </li>
         
        </ul>
        <button className='loginButton' ><Link to="/login" className="navLink">Login</Link></button>
  
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    );
  };

  const Part1=()=>{
    return(
      <div className='Contactmainpart'>
        <br/>
        <br/>
        <p className='Contactheading'>Our Support Team is always Available</p>
        <br/>
        <br/>
        <br/>
        <div className='ButtonsClass'>
            <button>
                <div><img src={Service} /><p>Request for Service</p></div>
            </button>
            <button>       
                <div><img src={CustomerCare}/><p>Customer Care</p></div>
            </button>
            <button>
                <div><img src={Mailus}/><p>Mail Us</p></div>
            </button>
        </div>
        <p className='Contactheading'>Our Office</p>
        <br/>
        <br/>
        <br/>
        <div className='ButtonsClass' style={{marginTop:"-6vh"}}>
            <button style={{border:"none"}}>
                <div><img src={Location} /><p>Request for Service</p></div>
            </button>
            <button style={{border:"none"}}>       
                <div><img src={Location}/><p>Customer Care</p></div>
            </button>
            <button style={{border:"none"}}>
                <div><img src={Location}/><p>Mail Us</p></div>
            </button>
        </div>
      </div>
      
    );
  };

  
class Contactus extends Component {
  render() {
    return (
      <div >
        <NavBar />
        <Part1 />
      </div>
    );
  }
}

export default Contactus;
