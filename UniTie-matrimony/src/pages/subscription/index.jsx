import React,{useRef} from 'react'; //rafce
import "../subscription/subscription.css";
// import LogoImg from "../../../src/pages/subscription/images/logo.png";
import Navbar from 'pages/navbar';
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"


const Sub = () => {
  const navigate = useNavigate();
  const scroll=useRef(false);
  const handleClick = (ref) => {
       ref.current.scrollIntoView({ behavior: "smooth" });
     };
     const isDarkMode = useSelector(state => state.mode === "dark");

     const handleOne = () => {
       window.location.href = 'https://buy.stripe.com/test_eVa4k3771cgt6L6cMM';
     }

     const handleTwo = () => {
       window.location.href = 'https://buy.stripe.com/test_bIY4k362X4O10mI289';
     }
  return (
    <><Navbar/>
    <div>
      <div class="sub-Contanier">

          <div className='sub-nav'>
        {/* <img id="a2" src={LogoImg} alt="This is Logo" />
        <h1 id="a1">UniTie</h1> */}
        <button class="sub-btn" onClick={()=>handleClick(scroll)}>SUBSCRIBE</button>
        </div>
          
      </div>

      {/* Upper part is done */}


      <div class="sub-Lower" >



        <div class="sub-Div1">
          <div class="sub-freeid">
          <h1 class="sub-heading">Free</h1>
      
          </div>

          <p className={`sub-free ${isDarkMode ? "dark-mode1" : ""}`}><ul><li>Browse profile</li></ul></p>
          <p className={`sub-free ${isDarkMode ? "dark-mode1" : ""}`}><ul><li>Shortlist & send interest</li></ul></p>
          <p className={`sub-free ${isDarkMode ? "dark-mode1" : ""}`}><ul><li>Add friends and post</li></ul></p>
          <p className={`sub-free ${isDarkMode ? "dark-mode1" : ""}`}><ul><li>Message and chat with only some users</li></ul></p>
          <button class ="sub-Button0" type="button">It's Free</button>
        </div>

        <div class="sub-Div2">
          <div class="sub-freeid">
            <h1 class="sub-heading">3 Months</h1>
          </div>
          <p className={`sub-free2 ${isDarkMode ? "dark-mode2" : ""}`}> <ul><li>Browse profile</li></ul></p>
          <p className={`sub-free2 ${isDarkMode ? "dark-mode2" : ""}`}> <ul><li>Shortlist & send interest</li></ul></p>
          <p className={`sub-free2 ${isDarkMode ? "dark-mode2" : ""}`}> <ul><li>Add friends and post</li></ul></p>
          <p className={`sub-free2 ${isDarkMode ? "dark-mode2" : ""}`}> <ul><li>Message and chat with only some users</li></ul></p>
          <p className={`sub-free2 ${isDarkMode ? "dark-mode2" : ""}`}> <ul><li>Access wedding planner, pre wedding shoot events</li></ul></p>
          <p className={`sub-free2 ${isDarkMode ? "dark-mode2" : ""}`}> <ul><li>Access to contact with travel agency</li></ul></p>
          <button class ="sub-Button1" type="button" onClick={handleOne} ref={scroll}>Rs 299</button>
        </div>

        <div class="sub-Div3">
          <div class="sub-freeid">
            <h1 class="sub-heading">6 Months</h1>
          </div>

          <p className={`sub-free3 ${isDarkMode ? "dark-mode3" : ""}`}> <ul><li>Browse profile</li></ul></p>
          <p className={`sub-free3 ${isDarkMode ? "dark-mode3" : ""}`}> <ul><li>Shortlist & send interest</li></ul></p>
          <p className={`sub-free3 ${isDarkMode ? "dark-mode3" : ""}`}> <ul><li>Add friends and post</li></ul></p>
          <p className={`sub-free3 ${isDarkMode ? "dark-mode3" : ""}`}> <ul><li>Message and chat with only some users</li></ul></p>
          <p className={`sub-free3 ${isDarkMode ? "dark-mode3" : ""}`}> <ul><li>Access wedding planner, pre wedding shoot events</li></ul></p>
          <p className={`sub-free3 ${isDarkMode ? "dark-mode3" : ""}`}> <ul><li>Access to contact with travel agency quickly and customize packages</li></ul></p>

          <button class ="sub-Button2" type="button" onClick={handleTwo}>Rs 549</button>
        </div>


      </div>
    </div>
    </>
  )
}

export default Sub