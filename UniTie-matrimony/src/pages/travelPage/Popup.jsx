import React, { useState } from "react";
import "./Popup.css";
import axios from "axios";

function Popup({ onClose }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [budget, setBudget] = useState("");
  const [travelType, setTravelType] = useState("");
  const [error, setError] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  const handleBookNowClick = async (e) => {
    e.preventDefault();
    if (!email || !phone || !city || !travelDate || !budget || !travelType) {
      setError("Please fill all fields");
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email");
    } else if (!validatePhone(phone)) {
      setError("Please enter a 10-digit phone number");
    } else {
      setError("Details saved successfully");

      const response = await fetch(
        "https://matrimony-backend.onrender.com/contactus/travel",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            phone,
            city,
            travelDate,
            budget,
            travelType,
          }),
        }
      );
      try {
        const result = await response.json();
        console.log(result);
        setEmail("");
        setPhone("");
        setCity("");
        setTravelDate("");
        setBudget("");
        setTravelType("");
      } catch (error) {
        console.log(error);
      }

      setIsBooked(true);
      setTimeout(() => {
        onClose();
      }, 11000);
    }
  };

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;

    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^\d{10}$/;

    return regex.test(phone);
  };

  const today = new Date().toISOString().split("T")[0];

  const handleCloseClick = () => {
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="popup-header">
          <h2>Contact Us Now!</h2>
          <button className="close-button" onClick={handleCloseClick}>
            &times;
          </button>
        </div>
        <div className="popup-content">
          <div className="form-container">
            <div className="form-row">
              <input
                className="user-input"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-row">
              <input
                className="user-input"
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-row">
              <input
                className="user-input"
                type="text"
                placeholder="Resident City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            <div className="form-row">
              <select
                className="user-input"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                required
              >
                <option value="">Approx Budget</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="form-row">
              <select
                className="user-input"
                value={travelType}
                onChange={(e) => setTravelType(e.target.value)}
                required
              >
                <option value="">Type of Travel</option>
                <option value="Road Trips">Road Trips</option>
                <option value="Trekking">Trekking</option>
                <option value="Resorts">Resorts</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="date-picker-container">
              <label htmlFor="date">Starting Travel Date</label>
              <input
                className="user-input date-picker"
                type="date"
                placeholder="Travel Date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                min={today}
                required
              />
            </div>
          </div>
        </div>
        {error && <div className="error">{error}</div>}
        <button className="book-button" onClick={handleBookNowClick}>
          Submit
        </button>

        {isBooked && (
          <div className="success-message">
            <h3>We will get in touch with you shortly.</h3>
          </div>
        )}
      </div>
    </div>
  );
}
export default Popup;
