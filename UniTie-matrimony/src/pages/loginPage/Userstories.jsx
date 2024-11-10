import { hover } from "@testing-library/user-event/dist/hover";
import React, { useRef } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "./Userstories.css";
import Login1 from "./Login1";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Wave from "react-wavify";

import loginimg2 from "../../../src/images/loginimg002.jpg";
import loginimg3 from "../../../src/images/loginimg003.jpg";
import loginimg4 from "../../../src/images/loginimg004.jpg";

import loginimg5 from "../../images/MicrosoftTeams-image (5).png";
import loginimg6 from "../../images/MicrosoftTeams-image (6).png";
import loginimg7 from "../../images/MicrosoftTeams-image (7).png";
import loginimg8 from "../../images/MicrosoftTeams-image (8).png";
import loginimg9 from "../../images/MicrosoftTeams-image (9).png";
import loginimg10 from "../../images/MicrosoftTeams-image (10).png";
import loginimg11 from "../../images/icons8-gmail-500.png";
import loginimg12 from "../../images/icons8-facebook-500.png";
import loginimg13 from "../../images/icons8-twitter-500.png";
import loginimg14 from "../../images/icons8-instagram-500.png";
import loginimg15 from "../../images/icons8-gmail-500 (1).png";

import { useLocation } from "react-router-dom";

const Maindiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Userpage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: linear-gradient(to bottom, #ffabab, rgba(255, 171, 171, 0));
  //align-items:center;
  justify-content: space-around;
  margin-top: 0;
`;
const Stories = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 3rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    // margin-top: 6rem;
  }
`;

const Top = styled.div`
  font-family: "Copperplate Gothic Light", sans-serif;
  display: flex;
  justify-content: center;
  margin-top: 17rem;
  font-size: 2rem;
  font-weight: bold;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Userimages = styled.img`
  width: 14em;
  height: 15em;
  // display: block; /* Make the image a block-level element */
  //   width: 100%; /* Make the image fill the width of the container */
  //   height: auto; /* Maintain aspect ratio */
  //   object-fit: cover;
  border-radius: 1rem;
`;
const Imagediv = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;
`;

const Aboutus = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 6rem;
`;
const Aboutusdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 2.8em;
`;

const Connect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1.6em;
  margin-top: 3rem;
`;
const Connectdiv = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1.6em;
`;

const StyledHeader = styled.h1`
  font-family: "Copperplate Gothic Light", sans-serif;
  font-size: 2rem;
  // color: black;
`;
const Userheding = styled.h1`
  text-align: center;
  font-family: "Copperplate Gothic Light", sans-serif;
  font-size: 2rem;
`;

function Userstories() {
  const aboutRef = useRef(false);
  const storiesRef = useRef(false);
  const contactRef = useRef(false);
  const isDarkMode = useSelector((state) => state.mode === "dark");
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Maindiv>
      <Login1
        aboutRef={aboutRef}
        storiesRef={storiesRef}
        contactRef={contactRef}
      />
      <Userpage>
        {/* <div>
          <Top ref={aboutRef} id="about">
            User Stories
          </Top>
        </div> */}
        {/* ---------------------------------------------------------------------------------------------------- */}
        <Userheding>user stories</Userheding>
        <Stories ref={aboutRef} id="about">
          <div class="imagehover">
            <Card sx={{ maxWidth: 335, borderRadius: 8 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="280"
                  image={loginimg2}

                  // style={{filter: "opacity(0.9)"}}
                />

                <CardContent style={{ backgroundColor: "#FFABAB" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Abhishek & Aradhaya
                  </Typography>

                  <Typography variant="body2" color="black">
                    I’m so happy with this life. This site has bought me so much
                    happiness and a new experience while exploring the life with
                    my half partner.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>

          <div class="imagehover">
            <Card sx={{ maxWidth: 335, borderRadius: 8 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="280"
                  image={loginimg3}
                  alt="green iguana"
                />

                <CardContent style={{ backgroundColor: "#FFABAB" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Soumdeep & Jaismitha
                  </Typography>

                  <Typography variant="body2" color="black">
                    This site has bought me so much happiness and a new
                    experience while exploring the life with my half partner.I`m
                    relly thankful to them.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>

          <div class="imagehover">
            <Card sx={{ maxWidth: 335, borderRadius: 8 }}>
              <CardActionArea>
                <CardMedia component="img" height="280" image={loginimg4} />

                <CardContent style={{ backgroundColor: "#FFABAB" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Devshish & Premvada
                  </Typography>

                  <Typography variant="body2" color="black">
                    I’m so happy with this life. This site has bought me so much
                    happiness and a new experience while exploring the life with
                    my half partner.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </Stories>

        <Aboutus ref={storiesRef} id="stories">
          <Aboutusdiv>
            <img className="imagehover" src={loginimg5} alt="" width="100px" />
            <p>We respect your privacy</p>
          </Aboutusdiv>
          <Aboutusdiv>
            <img className="imagehover" src={loginimg6} width="100px" />
            <p>A place to meet your life partner</p>
          </Aboutusdiv>
          <Aboutusdiv>
            <img className="imagehover" src={loginimg7} alt="" width="100px" />
            <p>Talk endlessly with chat feature</p>
          </Aboutusdiv>
        </Aboutus>
        <Connect ref={contactRef} id="contact">
          <StyledHeader>Connect Us With</StyledHeader>

          <Connectdiv>
            <div>
              <a href="https://www.facebook.com/profile.php?id=100092438869752">
                <img
                  className="imagehover"
                  src={isDarkMode ? loginimg12 : loginimg8}
                  alt=""
                  width="30px"
                />
              </a>
            </div>
            <div>
              <a href="https://twitter.com/UniTie_">
                <img
                  className="imagehover"
                  src={isDarkMode ? loginimg13 : loginimg9}
                  width="30px"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/unitie_matrimony/">
                <img
                  className="imagehover"
                  src={isDarkMode ? loginimg14 : loginimg10}
                  alt=""
                  width="30px"
                />
              </a>
            </div>
            <div>
              <a href="mailto:unitiematrimony@gmail.com">
                <img
                  className="imagehover"
                  src={isDarkMode ? loginimg15 : loginimg11}
                  alt=""
                  width="30px"
                />
              </a>
            </div>
          </Connectdiv>
        </Connect>

        <div>
          <Wave
            fill="#FFABAB"
            paused={false}
            options={{
              height: 20,

              amplitude: 20,

              speed: 0.4,

              points: 3,
            }}
          ></Wave>
        </div>
      </Userpage>
    </Maindiv>
  );
}

export default Userstories;
