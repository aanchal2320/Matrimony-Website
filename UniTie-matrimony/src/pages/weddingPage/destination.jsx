import React, { useState } from 'react';
import "./traditional.css";
import Testimonials from "./testimonials";
import img1 from "./Images/pic10.png"
import img2 from "./Images/pic11.png"
import img3 from "./Images/pic12.png"
import img4 from "./Images/pic13.png"
import img5 from "./Images/pic14.png"
import img6 from "./Images/pic15.png"
import img7 from "./Images/pic16.png"
import img8 from "./Images/pic17.png"
import img9 from "./Images/pic18.png"
import Popup from "./Popup";

export default function Abroad() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "TAMARIND GLOBAL WEDDINGS",
      content: <p>
       Creating unforgettable experiences across all its verticals, Tamarind Global Weddings is the
specialized wedding division of Tamarind Global. Planning a destination wedding in India or in any of the best destination wedding locations 
around the world is what Tamarind Global Weddings does best!
      </p>,
      testimonials: [
        {
          name: "Vasu",
          pic:<img src={img1} className="pic"/>,
          comment: "So glad to have found tamarind global weddings as our wedding decorators! Right from the start, Sahiti ensured she understood our requirements and guided us with ideas and even No’s where we needed it. The venue looked magical on the final day and all our guests loved it"
        },
        {
          name: "Prashanth",
          pic:<img src={img8} className="pic"/>,
          comment: "The experience that I have in Tamarind global weddings was great! It was easy to use and have significant numbers of offers available. Easy and simple website that I can access. Highly recommend to people!"
        },
        {
          name: "Kishan",
          pic:<img src={img9} className="pic"/>,
          comment: "I really loved it. These guys handled everything professionally. And they also followed confidentiality as well as the decor was impeccable. Thank you so much tamarind global wedding team. Love you all"
        }
      ]
    },
    {
      title: "DESTINATION WEDDING",
      content:<p> "Search through our premier portfolio of resorts to find your perfect fit, whether you're looking for a beachfront all-inclusive property or a quaint European castle in the country, we'll help make your dreams of the perfect destination wedding a reality. From a sprawling family-friendly gem to a chic and secluded adults-only oasis, we offer you a world of choice." </p>,
      testimonials: [
        {
          name: "Lakshmi",
          pic:<img src={img7} className="pic"/>,
          comment: "What ends well is well done. Thanks again for all the help.Looking forward for further engagements."
        },
        {
          name: "Dharvi",
          pic:<img src={img5} className="pic"/>,
          comment: "So glad to have found destination wedding.com as our wedding decorators! Right from the start, Praha ensured she understood our requirements and guided us with ideas and even No’s where we needed it. The venue looked magical on the final day and all our guests loved it"
        },
        {
          name: "Kalyan",
          pic:<img src={img3} className="pic"/>,
          comment: "The experience that I have in destination wedding was great! It was easy to use and have significant numbers of offers available. Easy and simple website that I can access. Highly recommend to people!"
        }
      ]
    },
    {
      title: "LOVE AT FIRST SITE",
      content: <p>Our goal at Love at First Site Destination Weddings is to ensure that your Destination Wedding Planning experience is seamless and stress free for you. Our team of professional Destination Wedding Planners will work with you to create a wedding that goes above and beyond what you’ve been dreaming of</p>,
      testimonials: [
        {
          name: "Chaitanya",
          pic:<img src={img6} className="pic"/>,
          comment: "I really loved it. These guys handled everything professionally. And they also followed confidentiality as well as the decor was impeccable. Thank you so much team love at first site. Love you all"
        },
        {
          name: "Krishna",
          pic:<img src={img4} className="pic"/>,
          comment: "The experience that I have in Love at first site was great! It was easy to use and have significant numbers of offers available. Easy and simple website that I can access. Highly recommend to people!"
        },
        {
          name: "Hari",
          pic:<img src={img2} className="pic"/>,
          comment: "So glad to have found love at first site as our wedding decorators! Right from the start, Praha ensured she understood our requirements and guided us with ideas and even No’s where we needed it. The venue looked magical on the final day and all our guests loved it"
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
