import React from "react";
import './events.css'
import Navbar from "pages/navbar";

import logo from '../../images/logo.png'
import img1 from '../../images/eveimg1.jpg'
import img2 from '../../images/eveimg2.jpg'
import img3 from '../../images/eveimg3.png'
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="evback"></div>
        <div className="below">
          <div>
            <div className="text">
              <div className="text1">
                <Link to="/weddingPage" className="link">
                  Wedding Planner
                </Link>
              </div>
              <div className="text2">
                A day that arrives, once in a lifetime. You don’t want these
                moments to slide, while you are busy in the preparations. So let
                us take care of your entire wedding management. If you feel you
                got this, you can always choose us to help you in selected areas
                where you want our expertise to manifest your wedding dream.{" "}
              </div>
            </div>
          </div>
          <div>
            <div className="events1">
              <div>
                <a href="/weddingPage">
                  <img className="eveimg1" src={img1} />
                </a>
              </div>
              <div className="events12">
                <div className="text3">
                  <Link to="/weddingPage" className="link">
                    Pre Wedding Shoot
                  </Link>
                </div>
                <div className="text3-1">
                  Storing your wedding story in a timeless memory! When we long
                  to relive the good times spent, we open albums releasing
                  nostalgic scents.{" "}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="events2">
              <div className="events22">
                <div className="text4">
                  <Link to="/travelPage" className="link">
                    Travel Package
                  </Link>
                </div>
                <div className="text4-1">
                  Feel confident when you book tickets for the top-rated tours
                  and activities for your trip. Skip-the-line tickets help you
                  take advantage of each moment you have in your destination.{" "}
                </div>
              </div>
              <div><a href="/travelPage">
                <img className="eveimg2" src={img2} /></a>
              </div>
            </div>
          </div>
          <div>
            <div className="events3">
              <div><a href="/travelPage">
                <img className="eveimg3" src={img3} /></a>
              </div>
              <div className="events32">
                <div className="text5">
                  <Link to="/travelPage" className="link">
                    Couple Dates
                  </Link>
                </div>
                <div className="text5-1">
                  Make a Time Capsule. One of the most fun date ideas is to make
                  a time capsule together. Gather all the romantic memorabilia
                  from your relationship{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
