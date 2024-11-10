import React, { useState } from 'react';
import "./traditional.css";
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
      title: "WED ME GOOD",
      content: <p>
       WedMeGood is an Indian Wedding Planning Website and app where you can find the best wedding vendors, with prices and reviews at the click of a button. Whether you are looking to hire wedding planners in India, or looking for the top photographers, or just some ideas and inspiration for your wedding. WedMeGood can help you solve your wedding planning woes through its unique features. With a checklist, detailed vendor list, inspiration gallery and blog - you won't need to spend hours planning a wedding anymore
      </p>,
      testimonials: [
        {
          name: "Nisha",
          pic:<img src={img1} className="pic"/>,
          comment: "I really loved it. These guys handled everything professionally. And they also followed confidentiality as well as the decor was impeccable. Thank you so much team wed me good team. Love you all"
        },
        {
          name: "Devaki",
          pic:<img src={img2} className="pic"/>,
          comment: "It was a great pleasure for us to thank a many times to we me good team for their friendly behave and so many help and guidance. I am so suprised by their events and decoration for our wedding.Highly remmended"
        },
        {
          name: "Sanjeev",
          pic:<img src={img6} className="pic"/>,
          comment: " Thank you so much, My wedding was very remarkable and decoration was upto mark. I will strongly recommend to wed me good team"
        }
      ]
    },
    {
      title: "SHADIYAARI",
      content:<p> Locked the date? Here comes Shaadiyari at your every step which wedding venue to choose, bridal lehenga to wear, to which photographer to hire to the honeymoon getaway all at your finger tips. Looking back on your wedding day you want to relieve every moment and capturing them beautifully is what Shaadiyari photographers do. We feature the best wedding photographer options to choose from.</p>,
      testimonials: [
        {
          name: "Shalini",
          pic:<img src={img9} className="pic"/>,
          comment: " shaadiyari is providing best rates in the market. book your wedding services with shaadiyari.."
        },
        {
          name: "Prasad",
          pic:<img src={img5} className="pic"/>,
          comment: " Thank you Shaadiyari team for such great event. Our guests felt very comfortable and enjoyed a lot during our wedding. I will strongly recommend to Shaadiyari.com ."
        },
        {
          name: "Nikita",
          pic:<img src={img3} className="pic"/>,
          comment: "Shadiyari has helped me a lot to book wedding arrangements for my cousins wedding I refer it to all."
        }
      ]
    },
    {
      title: "ALANKARAN",
      content: <p>"Your wedding dreams & anticipations can be cast into real-life grand experiences and that’s what Alankaran does for you! Right from picking that special place to ideating designs to adorn that space. From gathering your kins & buddies to taking care of all their needs.
      From styling you for every custom to handling the details of every rasam. We are here to curate and capture a picture-perfect wedding shebang for you.
      So you can toast to new beginnings in high-spirits & live the wedding -emotion, is the reason why Alankaran exists; to manifest your dream-days with sheer dedication."</p>,
      testimonials: [
        {
          name: "Jyoti",
          pic:<img src={img8} className="pic"/>,
          comment: "Our wedding went so good nad everyone said it was a royal wedding. Special thanks to the wedding team and sangeet decor team gto make it so remarkable for my love"
        },
        {
          name: "Balaji",
          pic:<img src={img7} className="pic"/>,
          comment: "Thanks Alankaran team for making my wedding remarkable, and I still couldn't forget the DJ night and sangeeth decoration. Very pleased with ypur services. Guys Highly recommended."
        },
        {
          name: "Sunitha",
          pic:<img src={img4} className="pic"/>,
          comment: "The name itself suggests that ALANKAR ehich typically means to decorate. Astheir name their work is so mesmerizing, Ouer guests enjoyed a lot and could never forget our wedding. Only beavause of alankaran team. Thanks so much"
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
