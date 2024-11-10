import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./wedding.css";
import {PictureRow,PictureRow1} from "./picturerow";
import Traditional from "./traditional";
import Destination from "./destination";
import DIY from "./diy";
import img1 from "./Images/slide1.png"
import img2 from "./Images/slide2.png"
import img3 from "./Images/slide3.png"
import img4 from "./Images/slide4.png"
import img5 from "./Images/slide5.png"
import img6 from "./Images/slide6.png"
import img7 from "./Images/traditional.png"
import img8 from "./Images/DIY.png"
import img20 from "./Images/destination.png"
import img9 from "./Images/icon1.png"
import img10 from "./Images/icon2.png"
import img11 from "./Images/icon3.png"
import img12 from "./Images/camera.png"
import img13 from "./Images/decoration.png"
import img14 from "./Images/catering.png"
import img15 from "./Images/makeup.png"
import img16 from "./Images/mehandi.png"
import img17 from "./Images/videography.png"
import img18 from "./Images/DJ Event.png"
import img19 from "./Images/venue.png"
import Navbar from "pages/navbar";

const images = [
    img1, img2, img3, img4, img5, img6];

function Travel() {
    
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
    const [slider, setSlider] = useState(null);
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        fade: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    };

    const traditionalContent = (
        <div className="content">
            <Traditional />
        </div>
    );

    const destinationContent = (
        <div className="content">
            <Destination />
        </div>
    );

    const diyContent = (
        <div className="content">
            <DIY />
        </div>
    );

    return (
        <div className="container">
              <Navbar/>
            <Slider {...settings} ref={setSlider}>
                {images.map((imgSrc) => (
                    <div key={imgSrc}>
                        <img src={imgSrc} alt="random" className="slider-image" />
                    </div>
                ))}
            </Slider>
            <div className="button-container">
                <button
                    className={`button ${activeButton === "traditional" ? "active" : ""
                        }`}
                    onClick={() => handleButtonClick("traditional")}
                >
                    Traditional
                </button>
                <button
                    className={`button ${activeButton === "diy" ? "active" : ""
                        }`}
                    onClick={() => handleButtonClick("diy")}
                >
                    DIY
                </button>
                <button
                    className={`button ${activeButton === "destination" ? "active" : ""
                        }`}
                    onClick={() => handleButtonClick("destination")}
                >
                    Destination
                </button>
                
            </div>
            <div className="content-container">
                {activeButton === "traditional" && traditionalContent}
                {activeButton === "diy" && diyContent}
                {activeButton === "destination" && destinationContent}
            </div>
            <div className='head'>
                <h1>We Provide</h1>
            </div>
          
            <div className="wed1img">

                <div className="cardphoto">

                    <img src={img12} alt="" width="80px" />

                    <h3>PHOTOGRAPHY</h3>
                    
                    {/* <p>Expert Candid and Traditional Photography</p> */}

                </div>

                <div className="card">

                    <img src={img13} alt="" width="80px" />

                    <h3>DECORATION</h3>

                    {/* <p>Professionally Designed Decor At Attractive Prices</p> */}

                </div>
                <div className="cardphoto">

                    <img src={img19} alt="" width="80px" />

                    <h3>VENUE</h3>

                    {/* <p>Experienced Mehandi Artists who Provide a Wide Range Of Designs</p> */}

                </div>

                <div className="cardphoto">

                    <img src={img17} alt="" width="80px" />

                    <h3>VIDEOGRAPHY</h3>

                    {/* <p>High quality Traditional And Candid Photography</p> */}

                </div>

            </div>
            
            <div className="wed2">

                <div className="cardphoto">

                    <img src={img15} alt="" width="80px" />

                    <h3>MAKEUP</h3>

                    {/* <p> Talented Makeup Artist Who Ensure You Look Your Best</p> */}

                </div>
                <div className="cardphoto">

                    <img src={img16} alt="" width="80px" />

                    <h3>MEHANDI</h3>

                    {/* <p>Experienced Mehandi Artists who Provide a Wide Range Of Designs</p> */}

                </div>

                <div className="cardphoto">

                    <img src={img18} alt="" width="80px" />

                    <h3>DJ EVENT</h3>

                    {/* <p>Experienced Mehandi Artists who Provide a Wide Range Of Designs</p> */}

                </div>

                <div className="cardphoto">

                    <img src={img14} alt="" width="80px" />

                    <h3>CATERING</h3>

                    {/* <p> Delicious Menus Covering All Cuisines And Price Ranges</p> */}

                </div>

            </div>
            <div>
                <PictureRow
                    src={img7}
                    heading="TRADITIONAL OR CLASSIC WEDDING"
                    text="Even though lots of couples are choosing to have unique and alternative weddings these days, there is still quite a number that stick with traditional and formal weddings." />
                <PictureRow1
                    heading="DIY- Do It Yourself Wedding"
                    text="The couple will decide to make virtually everything needed for the wedding themselves. From the décor to the catering, stationery, even the cake, entertainment, the reception bar, and other essential styling elements for the wedding."
                    
                    src={img8}
                />
                <PictureRow
                    src={img20}
                    heading="DESTINATION WEDDING"
                    text ="Some couples choose to have their wedding at a completely different location from their hometown. It could be a different city or different country, but couples choose the destination wedding for lots of different reasons."
                />
            </div>
            <div className="wed4">

                <div className="how">HOW IT WORKS</div>

            </div>

            <div className="wed5">

                <div>

                    <img className="icon1" src={img11} alt="" width="80px" />

                    <h3>SPEAK TO US </h3>

                    <p>Give Your Requirement & Perferences To your planner</p>

                </div>

                <div>

                    <img className="icon2" src={img10} alt="" width="80px" />

                    <h3>SELECT THE OPTIONS</h3>
                    <p>Get A Walkthrough Of Our Designs, Pricing & Services</p>

                </div>

                <div>

                    <img className="icon3"  src={img9} alt="" width="80px" />

                    <h3>RELAX</h3>
                    <p>Sit Back & Relax While We Do All The Planning & Coordination</p>
                </div>

            </div>
        </div >

    );
}

export default Travel;
