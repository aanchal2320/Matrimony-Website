import React, { useState } from 'react';
import "./traditional.css";
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
      title: "WEDDING WIRE",
      content: <p>
        Temple Tree Weddings Designers have a team of professionals who put their best efforts and ideas to fulfil all your expectations and desires and they aim to deliver maximum customer satisfaction with their services. Their staff has excellent management and execution skills and they will ensure that you enjoy your wedding functions without any hassle.
      </p>,
      testimonials: [
        {
          name: "Deepika",
          pic:<img src={img1} className="pic"/>,
          comment: "So glad to have found  wedding wire as our wedding decorators! Right from the start, Praha ensured she understood our requirements and guided us with ideas and even No’s where we needed it. Be it visiting the venue or getting on calls and helping us visualise our special day.All our guests loved it."
        },
        {
          name: "Suresh",
          pic:<img src={img2} className="pic"/>,
          comment: "It was a great pleasure for us to thank a many times to wedding wire for their friendly behave and so many help and guidance. It was a memorable event."
        },
        {
          name: "Aditi",
          pic:<img src={img3} className="pic"/>,
          comment: "Amazing service! The team was prompt and catered to our requirements so well! Very efficient team and decor was beautiful! Thank you!"
        }
      ]
    },
    {
      title: "LDS WEDDINGS",
      content: <p> Weddings are busy and emotional times. On top of the stress of planning and coordinating flowers, dresses, photographers, and caterers, there are two families’ worth of traditions, beliefs, desires and expectations to address.Remember that the family is the basic unit of the gospel. Your families, the one to which you were born and the one you’re starting the day you are sealed, are both important to your Heavenly Father. He wants every family to succeed.  </p>,
      testimonials: [
        {
          name: "Kiran",
          pic:<img src={img4} className="pic"/>,
          comment: "What ends well is well done. Thanks again for all the help.Looking forward for further engagements."
        },
        {
          name: "Divya",
          pic:<img src={img5} className="pic"/>,
          comment: "So glad to have found LDS Weddings as our wedding decorators! Right from the start, Praha ensured she understood our requirements and guided us with ideas and even No’s where we needed it.The venue looked magical on the final day and all our guests loved it."
        },
        {
          name: "Lata",
          pic:<img src={img6} className="pic"/>,
          comment: "Amazing service! The team was prompt and catered to our requirements so well! Very efficient team and decor was beautiful! Thank you!"
        }
      ]
    },
    {
      title: "TRIYUGI WEDDING",
      content: <p>Triyuginarayan is the venue of the celestial marriage of Shiva and Parvati.Triyuginarayan Vedic Vivah Planner are promoting Trijuginarayan as a wedding destination of Uttarakhand.
      Triyuginarayan Vedic Vivah Planner offers 'Vedic wedding' (traditional Indian Hindu wedding) planning, styling and catering services in Triyuginarayan.</p>,
      testimonials: [
        {
          name: "Akhil",
          pic:<img src={img9} className="pic"/>,
          comment: "Amazing service! The team was prompt and catered to our requirements so well! Very efficient team and decor was beautiful! Thank you!"
        },
        {
          name: "Anil",
          pic:<img src={img7} className="pic"/>,
          comment: "So glad to have found triyugi as our wedding decorators! Right from the start, Praha ensured she understood our requirements and guided us with ideas and even No’s where we needed it. The venue looked magical on the final day and all our guests loved it."
        },
        {
          name: "Mahitha",
          pic:<img src={img8} className="pic"/>,
          comment: "The experience that I have in Triyugi Decor was great! It was easy to use and have significant numbers of offers available. Easy and simple website that I can access. Highly recommend to people!"
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
