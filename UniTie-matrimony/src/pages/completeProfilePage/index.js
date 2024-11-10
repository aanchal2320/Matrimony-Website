import React, { useState } from "react";
import styled from "styled-components";
import pointingCharacter from "../../images/MicrosoftTeams-image.png";
import Navbar from "pages/navbar/index";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 40rem auto;
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 110vh;
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
  background-attachment: fixed;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  position: relative;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #000;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  font-size: calc(1.5rem + 1vw);
`;

const ImageContainer = styled.div`
  position: absolute;
  left: -150px;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 300px;
  height: auto;
`;

const ProfileForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(15px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3), 0 10px 15px rgba(0, 0, 0, 0.1);
`;

const FormElement = styled.div`
  color: #000;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  margin: 8px 0;
`;

const Label = styled.label`
  ${FormElement}
`;

const Input = styled.input`
  ${FormElement}
  width: 100%;
  padding: 6px 12px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
  color: #000;
  outline: none;

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &:focus,
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #000;
  }
`;

const Select = styled.select`
  ${FormElement}
  width: 100%;
  padding: 6px 12px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
  color: #000;
  outline: none;

  &:focus,
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

const HeightInput = styled(Input)`
  width: calc(45% - 5px);
  margin-right: 5px;
`;

const HeightUnit = styled.span`
  margin-right: 5px;
  color: #000;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const SubmitButton = styled.button`
  ${FormElement}
  width: 100%;
  background-image: linear-gradient(45deg, #ff9e00 0%, #ff6a00 100%);
  grid-column: span 2;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.7);
  transition: background-image 0.2s ease, transform 0.2s ease;

  &:hover {
    background-image: linear-gradient(45deg, #ff9700 0%, #ff6100 100%);
    transform: scale(1.05);
  }

  @media (min-width: 600px) {
    width: 100%;
    margin-top: 10px;
  }
`;

function CompleteProfile() {
  const navigate = useNavigate();
  const loggedUser = useSelector((state) => state.user);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [religion, setReligion] = useState("");
  const [nationality, setNationality] = useState("");
  const [location, setLocation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [annualIncome, setAnnualIncome] = useState("");
  const [maritialStatus, setMaritialStatus] = useState("");
  const [height, setHeight] = useState("");
  const [horoscope, setHoroscope] = useState("");

  const handleClick = (e) => {
    if (
      firstName == "" &&
      lastName == "" &&
      dob == "" &&
      gender == "" &&
      religion == "" &&
      nationality == "" &&
      location == "" &&
      occupation == "" &&
      annualIncome == "" &&
      maritialStatus == "" &&
      height == "" &&
      horoscope == ""
    ) {
      alert("Not a single field updated, Kindly update!");
    } else {
      e.preventDefault();
      const user = {
        loggedUser,
        firstName: firstName === "" ? loggedUser.firstName : firstName,
        lastName: lastName === "" ? loggedUser.lastName : lastName,
        dob: dob === "" ? loggedUser.dob : dob,
        gender: gender === "" ? loggedUser.gender : gender,
        religion: religion === "" ? loggedUser.religion : religion,
        location: location === "" ? loggedUser.location : location,
        nationality: nationality === "" ? loggedUser.nationality : nationality,
        occupation: occupation === "" ? loggedUser.occupation : occupation,
        annualIncome:
          annualIncome === "" ? loggedUser.annualIncome : annualIncome,
        maritialStatus:
          maritialStatus === "" ? loggedUser.maritialStatus : maritialStatus,
        height: height === "" ? loggedUser.height : height,
        horoscope: horoscope === "" ? loggedUser.horoscope : horoscope,
      };
      const configuration = {
        method: "put",

        url: "https://matrimony-backend.onrender.com/auth/completeprofile",

        data: user,
      };

      axios(configuration)
        .then((result) => {
          navigate("/success");
        })

        .catch((error) => {
          error = new Error("");
          console.log(error);
        });
    }
  };

  return (
    <>
      <Navbar />
      <AppContainer>
        <Container>
          <Title>Complete Your Profile</Title>
          <ImageContainer>
            <Image src={pointingCharacter} alt="Pointing Character" />
          </ImageContainer>
          <ProfileForm>
            <Label htmlFor="firstname">First Name:</Label>
            <Input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder="First Name"
            />

            <Label htmlFor="lastname">Last Name:</Label>

            <Input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              placeholder="Last Name"
            />

            <Label htmlFor="dob">Date of Birth:</Label>
            <Input
              type="date"
              name="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
              max={
                new Date(new Date().setFullYear(new Date().getFullYear() - 21))
                  .toISOString()
                  .split("T")[0]
              }
            />

            <Label htmlFor="gender">Gender:</Label>

            <Input
              type="text"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              placeholder="Male or Female"
            />

            <Label htmlFor="location">Location:</Label>

            <Input
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              placeholder="Eg Delhi"
            />

            <Label htmlFor="religion">Religion:</Label>
            <Select
              name="religion"
              value={religion}
              onChange={(e) => setReligion(e.target.value)}
              required
            >
              <option value="religion1">Select option</option>
              <option value="hindu">Hindu</option>
              <option value="christian">Christian</option>
              <option value="muslim">Muslim</option>
              <option value="jain">Jain</option>
              <option value="buddhist">Buddhist</option>
            </Select>

            <Label htmlFor="occupation">Occupation:</Label>
            <Input
              type="text"
              name="occupation"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              required
            />

            <Label htmlFor="income">Annual Income (p.a):</Label>
            <Input
              type="annualIncome"
              name="annualIncome"
              value={annualIncome}
              onChange={(e) => setAnnualIncome(e.target.value)}
              required
              placeholder="300000"
            />

            <Label htmlFor="nationality">Nationality:</Label>
            <Input
              type="text"
              id="nationality"
              name="nationality"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              required
            />

            <Label htmlFor="maritalstatus">Marital Status:</Label>
            <Select
              id="maritalstatus"
              name="maritalStatus"
              value={maritialStatus}
              onChange={(e) => setMaritialStatus(e.target.value)}
              required
            >
              <option value="selectOption1">Select option</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </Select>

            <Label htmlFor="horoscope">Horoscope:</Label>
            <Select
              id="horoscope"
              name="horoscope"
              value={horoscope}
              onChange={(e) => setHoroscope(e.target.value)}
              required
            >
              <option value="selectOption2">Select option</option>
              <option value="aries">♈ Aries</option>
              <option value="taurus">♉ Taurus</option>
              <option value="gemini">♊ Gemini</option>
              <option value="cancer">♋ Cancer</option>
              <option value="leo">♌ Leo</option>
              <option value="virgo">♍ Virgo</option>
              <option value="libra">♎ Libra</option>
              <option value="scorpio">♏ Scorpio</option>
              <option value="sagittarius">♐ Sagittarius</option>
              <option value="capricorn">♑ Capricorn</option>
              <option value="aquarius">♒ Aquarius</option>
              <option value="pisces">♓ Pisces</option>
            </Select>

            <Label htmlFor="height">Height</Label>
            <div>
              <HeightInput
                type="number"
                id="heightFeet"
                name="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
              <HeightUnit>ft</HeightUnit>
            </div>

            <SubmitButton type="submit" onClick={handleClick}>
              Submit
            </SubmitButton>
          </ProfileForm>
        </Container>
      </AppContainer>
    </>
  );
}
export default CompleteProfile;
