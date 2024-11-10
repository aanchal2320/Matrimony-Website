import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  const wrapper = {
    textAlign: "center",
    padding: "40px 0",
    height: "100vh",
    background: "#FCC8D1",
    display: "flex",
    alignItems: "center",
  };

  const card = {
    background: "white",
    padding: "60px",
    borderRadius: "4px",
    boxShadow: "0 2px 3px #FCC8D1",
    display: "inline-block",
    margin: "0 auto",
  };

  const ii = {
    color: "#D14D72",
    fontSize: "100px",
    lineHeight: "200px",
    marginLeft: "-15px",
  };

  const para = {
    color: "#D14D72",
    fontFamily: '"Nunito Sans", "Helvetica Neue", sans-serif',
    fontSize: "20px",
    margin: "0",
  };

  const heading = {
    color: "#D14D72",
    fontFamily: '"Nunito Sans", "Helvetica Neue", sans-serif',
    fontWeight: "900",
    fontSize: "40px",
    marginBottom: "10px",
  };

  const btn = {
    webkitBorderRadius: "3",
    mozBorderRadius: "3",
    borderRadius: "3px",
    fontFamily: "Georgia",
    color: "#ffffff",
    fontSize: "20px",
    background: "#FCC8D1",
    padding: "10px 20px 10px 20px",
    textDecoration: "none",
    marginTop: "0.6rem",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div style={wrapper}>
      <div style={card}>
        <div
          style={{
            borderRadius: "200px",
            height: "200px",
            width: "200px",
            background: "#FCC8D1",
            margin: "0 auto",
          }}
        >
          <i style={ii}>✓</i>
        </div>
        <h1 style={heading}>Success</h1>
        <p style={para}>User Details updated successfully !</p>
        <button style={btn} onClick={handleClick}>
          {" "}
          GO BACK{" "}
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
