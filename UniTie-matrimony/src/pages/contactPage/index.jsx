import React, { useState } from "react";
import Navbar from "pages/navbar";

import "./Contactnow.css";
import { useSelector } from "react-redux";

const ContactUs = () => {
  const [update, setUpdate] = useState(false);
  const [fullName, setFullName] = useState("");
  const [mobNo, setMobNo] = useState("");
  const [query, setQuery] = useState("");

  const handleClick = async () => {
    if (fullName && mobNo && query) {
      const response = await fetch(
        "https://matrimony-backend.onrender.com/contactus",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fullName, mobNo, query }),
        }
      );
      try {
        const result = await response.json();
        console.log(result);
        setUpdate(true);
      } catch (error) {
        console.log(error);
      }
    } else {
      setUpdate(false);
    }
    setFullName("");
    setMobNo("");
    setQuery("");
  };

  return (
    <>
      <Navbar />

      <div className="contact-us-container">
        <div className="contact-us-image">
          <img
            src="https://media.istockphoto.com/id/1423369897/photo/call-center-worker.jpg?b=1&s=170667a&w=0&k=20&c=SKeoIBoh9SG15iFz94tEoOOPg8OA0iivmtGj0HY_JL0="
            alt=""
          ></img>
        </div>

        <div className="contact-us-form-container">
          <div className="headings">
            <h2>Welcome To Help Centre</h2>
            <h3>Sign in to contact Customer Service, we're available 24/7</h3>
          </div>

          <div className="wrapper">
            <div className="fields">
              <label>FullName</label>
              <label>Mobile No</label>
              <label>Query</label>
            </div>
            <div className="fields">
              <input
                type="text"
                name="fullName"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                required
              />
              <input
                type="text"
                name="mobNo"
                value={mobNo}
                onChange={(e) => {
                  setMobNo(e.target.value);
                }}
                required
              />
              <textarea
                type="text"
                placeholder="Enter your query..."
                name="query"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                required
              />
              {update ? (
                <b style={{ color: "green" }}>Query sent successfully!</b>
              ) : (
                <b style={{ color: "red" }}> Kindly fill all the details...</b>
              )}
            </div>
          </div>

          <div className="form-submit-container">
            <button type="submit" onClick={handleClick} className="submit-btn">
              Submit
            </button>
          </div>
          {/* </form> */}
        </div>
      </div>
    </>
  );
};

export default ContactUs;
