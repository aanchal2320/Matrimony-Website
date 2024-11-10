import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./travel.css";
import {PictureRow,PictureRow1} from "./picturerow";
import Abroad from "./abroad";
import Regional from "./regional";
import Local from "./local";
import img1 from "./Images/slide1.png"
import img2 from "./Images/slide2.png"
import img3 from "./Images/slide3.png"
import img4 from "./Images/slide4.jpg"
import img5 from "./Images/slide5.png"
import img6 from "./Images/slide6.jpg"
import img7 from "./Images/travel1.png"
import img8 from "./Images/travel2.png"
import img9 from "./Images/icon1.png"
import img10 from "./Images/icon2.png"
import img11 from "./Images/icon3.png"
import Navbar from "pages/navbar";

const images = [
  img1, img2, img3, img4, img5, img6];

function Travel() {
  const [isLoaded, setIsLoaded] = useState(false);

   
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

  const abroadContent = (
    <div className="content">
      <Abroad />
    </div>
  );

  const regionalContent = (
    <div className="content">
      <Regional />
    </div>
  );

  const localContent = (
    <div className="content">
      <Local />
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
          className={`button ${activeButton === "abroad" ? "active" : ""
            }`}
          onClick={() => handleButtonClick("abroad")}
        >
          Abroad
        </button>
        <button
          className={`button ${activeButton === "regional" ? "active" : ""
            }`}
          onClick={() => handleButtonClick("regional")}
        >
          Regional
        </button>
        <button
          className={`button ${activeButton === "local" ? "active" : ""
            }`}
          onClick={() => handleButtonClick("local")}
        >
          Local
        </button>
      </div>
      <div className="content-container">
        {activeButton === "abroad" && abroadContent}
        {activeButton === "regional" && regionalContent}
        {activeButton === "local" && localContent}
      </div>
      <div className='head'>
        <h1>We Provide</h1>
      </div>
      <div>
        <PictureRow 
          src={img7}
          heading="FLY AWAY TO YOUR DREAM HOLIDAY"
          text ="I've fallen in love with adventures, so I began to wonder if that's why I've fallen for you
          .Get inspired and compare and book tickets to your destinations."/>
        <PictureRow1
          
          heading="ROAM AROUND THE WORLD WITH YOUR PARTNER"
          text="May your honeymoon be a time to unwind,relax and make memories that will last a lifetime . Compare prices and amenities from various booking sites"
          src={img8}
        />
        <PictureRow
          src="https://media.istockphoto.com/id/168763345/photo/young-couple-share-a-romantic-dinner-with-candles-on-beach.jpg?s=612x612&w=0&k=20&c=CX_F10nniJvPLuAZsFLf-SfOg96UwILa5Kmx0ZSrJNY="
          heading="ESCAPE FOR A WHILE "
          text="The candles know I've been wishing for you all my life, Have couple date dinners and have a pleasant evening your partner. You can suprise your partner with our customised options especially made for you"
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

          <img className="icon2"src={img10} alt="" width="80px" />

          <h3>SELECT THE OPTIONS</h3>
          <p>Get A Walkthrough Of Our Designs, Pricing & Services</p> 

        </div>

        <div>

          <img className="icon3"src={img9} alt="" width="80px" />

          <h3>RELAX</h3>
          <p>Sit Back & Relax While We Do All The Planning & Coordination</p> 
        </div>

      </div>
    </div>

  );
}

export default Travel;
