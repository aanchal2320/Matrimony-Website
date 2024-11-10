import React, { useState } from 'react';
import "./abroad.css";
import Testimonials from "./testimonials";
import img1 from "./Images/pic19.png"
import img2 from "./Images/pic20.png"
import img3 from "./Images/pic21.png"
import img4 from "./Images/pic22.png"
import img5 from "./Images/pic23.png"
import img6 from "./Images/pic24.png"
import img7 from "./Images/pic25.png"
import img8 from "./Images/pic26.png"
import img9 from "./Images/pic27.png"
import Popup from "./Popup";
export default function Abroad() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "JUST4YOU",
      content: <p>
      Enjoying your supper with your partner in a private setting decorated with fairy lights and rose petals and soothing background music to tap your feet along with. Delicious starters and main course will be served to satiate your hunger. Soak in the 
      vibe of the ambience and go with the flow of the night. Go for this candlelight dinner date in Delhi.
      </p>,
      testimonials: [
        {
          name: "RamDev",
          pic:<img src={img1} className="pic"/>,
          comment: "Even though I booked the package, I got surprised by looking at it. I booked Water all Around and it was so amazing n comfortable. You'll fall in love again with your partner. Must visit!"
        },
        {
          name: "Adhya",
          pic:<img src={img2} className="pic"/>,
          comment: "This is my first Experience with Jusst4You Surprise Planners and was a really really nice lakeside candlelight dinner surprise with live Jazz music & great light decorations. It's difficult to put the feeling into words. It was worth every penny and my wife liked it alot. Wish you guys good luck for the future."
        },
        {
          name: "Chandrika",
          pic:<img src={img3} className="pic"/>,
          comment: "I really loved it. These guys handled everything professionally. And they also followed confidentiality as well as the decor was impeccable. Thank you so much team Just4you. Love you all"
        }
      ]
    },
    {
      title: "EXPERIENCESAGA",
      content:<p> ExperienceSaga.com is a unit of ODM Entertainments Pvt. Ltd (headquartered in Delhi)
      Spanning across India, we promise to serve you in the best possible manner.
    Here, discover and book the most unique experiences and surprises. From candlelight dinners to beautiful birthday decorations, we have got all covered,
       that too based on your budget. </p>,
      testimonials: [
        {
          name: "Samantha",
          pic:<img src={img4} className="pic"/>,
          comment: "What ends well is well done. Thanks again for all the help.Looking forward for further engagements."
        },
        {
          name: "David",
          pic:<img src={img5} className="pic"/>,
          comment: "I really loved it. These guys handled everything professionally. And they also followed confidentiality as well as the decor was impeccable. Thank you so much team experiencesaga. Love you all."
        },
        {
          name: "Pavan",
          pic:<img src={img6} className="pic"/>,
          comment: "Amazing service! The team was prompt and catered to our requirements so well! Very efficient team and decor was beautiful! Thank you!"
        }
      ]
    },
    {
      title: "LOVIESTA",
      content: <p>Loviesta is an event management business that offers a wide range of products and services and has locations in all of India’s main cities. The term Loviesta is made out of two words: “Love” and “Fiesta.” Where Love will always stand for Love and Fiesta will always stand for Celebration, they become “Loviesta” when combined. Life should not only be lived, it should be celebrated. – Osho. Helping our clients create happy recollections of 
        significant occasions in their life has been an inspiration to move forward.</p>,
      testimonials: [
        {
          name: "Srinivas",
          pic:<img src={img7} className="pic"/>,
          comment: "Amazing service! The team was prompt and catered to our requirements so well! Very efficient team and decor was beautiful! Thank you!"
        },
        {
          name: "Naveena",
          pic:<img src={img8} className="pic"/>,
          comment: "Thank you for creating a memorable experience. it's good quality and value for money. I will recommend it to my friends too."
        },
        {
          name: "Spandana",
          pic:<img src={img9} className="pic"/>,
          comment: "Planned a Cabana Candle light dinner for my fiance, and Loviesta proved to be the perfect team for the occasion."
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
