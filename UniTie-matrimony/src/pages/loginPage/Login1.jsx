import React from "react";
import ReactDOM from "react-dom";
import "./Login1.css";
import Userstories from "./Userstories";
import logo001 from "../../images/MicrosoftTeams-image (15).png";
import googleimg from "../../images/MicrosoftTeams-image (13).png";
import fbimg from "../../images/MicrosoftTeams-image (14).png";
import Form from "./Form";

const Login1 = ({ aboutRef, storiesRef, contactRef }) => {
  // const stylecontainer = {
  //     backgroundColor: 'pink',
  //     border: '2px solid black',
  //     alignItems: 'center',
  //     textAlign: 'center',
  // }
  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="background">
      <div>
        <div class="topbar">
          <div class="left">
            {/* <img class="logo" src={logo001}/> */}
            <div
              className="tagline"
              style={{
                fontFamily: "Ink free",
                fontWeight: "bold",
                fontSize: "clamp(1rem, 2rem, 2.25rem)",
                color: "white",
                marginLeft: "1.5em",
              }}
            >
              UniTie
            </div>
          </div>

          <div class="right">
            <div onClick={() => handleClick(aboutRef)} class="about">
              STORIES
            </div>
            <div onClick={() => handleClick(contactRef)} class="about">
              CONTACT
            </div>
            <div onClick={() => handleClick(storiesRef)} class="about">
              ABOUT US
            </div>
          </div>
        </div>

        <div
          class="login"
          style={{
            fontFamily: "Ink free",
            fontWeight: "bold",
            color: "white",
          }}
        >
          <h2>UniTie </h2>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Login1;
