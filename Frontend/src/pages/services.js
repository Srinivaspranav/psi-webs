import React from 'react';
import Slider from 'react';
import "../Styles/services.css"
import img1 from "../images/Component 11.jpg"
import img2 from "../images/Home/Earth.jpg"
import ImageSlider from '../components/imageSlider';



const images = [
    img2,
    img1,
    'image3.jpg',
    // Add more image URLs as needed
  ];


const Services = () => {

    return (

        <div className="services">
           <div className='Section1'>
            <ImageSlider images={images} /></div>
            {/* <NAV/> */}
            <div className='Section2'>
                <div className='leftpart'>
                    <p className='heading'><span>Safety</span> in Every Byte, </p>
                    <p className='heading'><span>Security</span> in Every Bit </p>

                    <p className='subheading'>Learn More about the data Security Services we are providing. Our High Security Standards and High End Performing servers are built to keep every bit of your data safe and secure.</p>
                    <button>Join us --&gt;</button>
                </div>
                <div className='rightpart'>
                <img className='img'  src={img1} alt='image'>
                </img>
                </div>
            </div>


            <div className='Section3'>
            <div className='leftpart'>
                    <p className='heading'><span>Safety </span>in Numbers,  </p>
                    <p className='heading'><span>Security</span> in Data </p>

                    <p className='subheading'>With our cutting-edge solutions, we turn numbers into a fortress of security, ensuring that your data isn't just safe—it's fortified, encrypted, and impregnable.</p>
                    <button>Join us --&gt;</button>
                </div>
                <div className='rightpart'>
                

                </div>

            </div>
            <div className='Section4'>
                <div style={{padding: "30px",textAlign: "center"}}><h3>OUR APROACH</h3></div>
                <div style={{backgroundColor:"#413F3F",height:'50vh'}}>

                </div>
            </div>

            <div className='Section5'>
            <div className='leftpart'>
            <img src={img1} alt='image'>
                   </img>
                </div>
                <div className='rightpart'>
                <p style={{fontSize:'50px'}}>Unlocking Your Brand's </p>
                <p style={{fontSize:'50px'}}><h3>Digital Potential</h3></p>



                    <p style={{marginTop:'20px' ,fontSize:'24px'}}>From pixel to purchase, we orchestrate a symphony of strategy, storytelling, and seamless user experiences, ensuring that every click, every scroll, and every interaction leads to meaningful conversions. With us by your side, your brand doesn't just stand out—it shines, captivating hearts, minds, and wallets in the ever-evolving digital landscape.</p>
                   <button>Join us --&gt;</button>

                </div>
            </div>

            <div className='Section6'>
            <div className='leftpart'>
                    <p className='heading' style={{fontSize: "50px"}}>Where <b>Creativity</b> Meets <b>Conversion</b>: Your Digital Marketing Partner. </p>

                    <p className='subheading'style={{marginTop:'30px'}}>In the digital realm, creativity is the spark that ignites engagement, but it's the alchemy of conversion where true magic happens. We're not just your digital marketing partner; we're your creative catalysts, transforming ideas into captivating campaigns that resonate with your audience on a deeper level.</p>
                    <button>Join us --&gt;</button>
                </div>
                <div className='rightpart'>

                </div>

            </div>

            <div className='Section7'>
                <div className='leftpart'>
                    <p className='heading'><b>EdTech</b>: Bridging Gaps, Building Futures.</p>

                    <p className='subheading'>From pixel to purchase, we orchestrate a symphony of strategy, storytelling, and seamless user experiences, ensuring that every click, every scroll, and every interaction leads to meaningful conversions. With us by your side, your brand doesn't just stand out—it shines, captivating hearts, minds, and wallets in the ever-evolving digital landscape</p>
                    <button>Contact PSI--&gt;</button>
                </div>
                <div className='rightpart'>
                <img src='../images/Component 11.jpg' alt='image'>
                    </img>

                </div>
            </div>

            <div className='Section8'>
            <div className='leftpart'>
                    <p className='heading' style={{fontSize: "50px"}}>Digital Learning,<br></br> Limitless Possibilities</p>

                    <p className='subheading'style={{marginTop:'30px'}}>Imagine a world where classrooms have no walls, where textbooks are interactive adventures, and where learning knows no bounds. That's the realm of EdTech, where innovation meets education in an electrifying dance of discovery. </p>
                    <button>Explore Courses-&gt;</button>
                </div>
                <div className='rightpart'>

                </div>

            </div>


            


            


        </div>
    );
};



export default Services;
