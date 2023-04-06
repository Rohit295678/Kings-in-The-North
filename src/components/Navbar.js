import React, { useState,useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import {FaAddressBook}from 'react-icons/fa'
//import  Logomed from "../Images/nishant.jpg";
const Navbar = () => {
  const[token, settoken] = useState(localStorage.getItem("token"))
  // let token = localStorage.getItem("token");
  // console.log(token)
  function animation() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);
  // const changeto=()=>{
  //   token = localStorage.removeItem("token");
  // }

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <NavLink className="navbar-brand navbar-logo mx-3">
        {/* <img src={Logomed} alt="" style={{ width: "80px" }}></img> */}
        MEDCenter
      </NavLink>

      <button
        className="navbar-toggler"
        onClick={function () {
          setTimeout(function () {
            animation();
          });
        }}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              <i className="fas fa-tachometer-alt"></i>Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              <i className="far fa-address-book"></i>About
            </NavLink>
          </li>
          {token &&<li className="nav-item">
            <NavLink className="nav-link" to="/appointment">
              <i className="far fa-copy"></i>Appointment List
            </NavLink>
          </li>}
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              <i className="far fa-copy"></i>Contact Us
            </NavLink>
          </li>
        </ul>
        </div>
        
      {!token && <div className="my-2" style={{textAlign:'end'}}>
          <button
            type="button"
            className="btn btn-outline-light rounded-pill "
            //data-mdb-ripple-color="primary"
          >
            <NavLink to="/login" style={{textDecoration: 'none', color:'black'}}>Login</NavLink>
          </button>
          <button
            type="button"
            className="btn btn-outline-light rounded-pill mx-3"
            //data-mdb-ripple-color="primary"
          >
            <NavLink to="/sign" style={{textDecoration: 'none', color:'black'}}>Sign Up</NavLink>
          </button>
        </div> }
        {token && <div className="my-2 mx-4" style={{textAlign:'end'}}><span style={{fontSize:'20px',color:'white'}}><FaAddressBook/>Nitish</span>
        
        <button
        type="button"
        className="btn btn-outline-light rounded-pill mx-3"
        //data-mdb-ripple-color="primary"
      >
        <NavLink to="/" style={{textDecoration: 'none', color:'black'}} >LogOut</NavLink>
      </button></div>}
        
    </nav>
  );
};
export default Navbar;
