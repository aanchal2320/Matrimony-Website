import React, { useState } from 'react';
import "./abroad.css";

import Testimonials from "./testimonials";
import img1 from "./Images/pic1.jpeg"
import img2 from "./Images/pic2.jpeg"
import img3 from "./Images/pic3.png"
import img4 from "./Images/pic4.png"
import img5 from "./Images/pic5.png"
import img6 from "./Images/pic6.png"
import img7 from "./Images/pic7.png"
import img8 from "./Images/pic8.png"
import img9 from "./Images/pic9.png"
import Popup from "./Popup";


export default function Abroad() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "MAKE MY TRIP",
      content: <p>
        MakeMyTrip is an Indian online travel company founded in 2000.Headquartered in Gurugram, Haryana, its a company. the company provides
        online travel services including airline tickets, domestic and international holiday packages, hotel reservations,
        rail, and bus tickets. As of 31 March 2018, they have 14 company-owned travel stores in 14 cities, over 30 franchisee-owned
        travel stores in 28 cities, and counters in four major airports in India.
      </p>,
      testimonials: [
        {
          name: "Satwika",
          pic: <img src={img1} className="pic" />,
          comment: "I am back from the Unique Swiss Paris Mode. I can describe it in one line - I think I died and went to heaven and now I am back :) The whole trip was a Karmic Connection and I felt I was in a dream"
        },
        {
          name: "Shekar",
          pic: <img src={img2} className="pic" />,
          comment: "It was a great pleasure for us to thank a many times to Make My Trip for their friendly behave and so many help and guidance. It was a peaceful trip."
        },
        {
          name: "NiKhil",
          pic: <img src={img3} className="pic" />,
          comment: "We are back to India and have to admit, our Big Australian Holiday was amazing!! I would like to personally thank Mr.Jalaj for selecting the right places for us and Swati for organizing everything beautifully"
        }
      ]
    },
    {
      title: "LASTMINUTE",
      content: <p> "The company was founded by Martha Lane Fox and Brent Hoberman in 1998 and was a part of
        the UK internet boom of the late 1990s, part of the
        dot-com bubble and trading on the London Stock Exchange under the symbol 'LMN'.In May 2015, LastMinute.com was acquired
        from Sabre by the Bravofly Rumbo Group which rebranded as Lastminute Group." </p>,
      testimonials: [
        {
          name: "Sai",
          pic: <img src={img4} className="pic" />,
          comment: "What ends well is well done. Thanks again for all the help.Looking forward for further engagements."
        },
        {
          name: "Supriya",
          pic: <img src={img5} className="pic" />,
          comment: "We are back from one of the most amazing vacations we've been on lately! It was indeed a great experience- right from the interactions with Noel D'Silva at MMT, which were always informative and useful."
        },
        {
          name: "Meghana",
          pic: <img src={img6} className="pic" />,
          comment: "I am back from the Unique Swiss Paris Mode. I can describe it in one line - I think I died and went to heaven and now I am back :) The whole trip was a Karmic Connection and I felt I was in a dream."
        }
      ]
    },
    {
      title: "SKYSCANNER",
      content: <p>"Skyscanner is a metasearch engine and travel agency based in Edinburgh, Scotland. The site is available in over 30 languages and is used by 100 million people per month. The company lets people research and book travel options for their trips, including flights, hotels and car hire."</p>,
      testimonials: [
        {
          name: "Aditya",
          pic: <img src={img7} className="pic" />,
          comment: "We are back to India and have to admit, our Big Australian Holiday was amazing!! I would like to personally thank Mr.Jalaj for selecting the right places for us and Swati for organizing everything beautiful."
        },
        {
          name: "Harsha",
          pic: <img src={img8} className="pic" />,
          comment: "Skyscanner is our go to place to compare flight options, costs & assemble complicated multi city/country bookings -Often the fares are lower than offered by the airline sites! Easy to use and oodles of options. Highly recommend."
        },
        {
          name: "Dhinesh",
          pic: <img src={img9} className="pic" />,
          comment: "The experience that I have in Skyscanner was great! It was easy to use and have significant numbers of offers available. Easy and simple website that I can access. Highly recommend to people that wanted to go back to their hometown or holidays in different countries!"
        }
      ]
    }
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };
  const [showPopup, setShowPopup] = React.useState(false);
  

  const handleChooseUsClick = () => {

    setShowPopup(true);

  };

  const handleClosePopup = () => {

    setShowPopup(false);

  };


  return (
    <div className="slide-container">
      <div className="slide-title">{slides[currentSlide].title}</div>
      <div className="slide-content">{slides[currentSlide].content}</div>
      <Testimonials testimonials={slides[currentSlide].testimonials} />
      <div className="button-container">

        <button className="choose-us-button" onClick={handleChooseUsClick}>CHOOSE US</button>

      </div>

      {showPopup && (

        <Popup onClose={handleClosePopup} />

      )}

      <button className="arrow-button left-arrow" onClick={handlePrevSlide}>{"<"}</button>
      <button className="arrow-button right-arrow" onClick={handleNextSlide}>{">"}</button>
    </div>
  );
}
