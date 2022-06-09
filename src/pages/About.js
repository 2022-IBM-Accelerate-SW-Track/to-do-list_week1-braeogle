import React, { Component } from 'react';
import "./About.css";
import <brae> from; "../assets/brae.jpg"; //future PROBLEM

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              // Image goes here
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Brae Ogle</div>
            <div className="brief_description">
              My disription of myself. Im cool
            </div>
          </div>
        </div>
      </div>
      </div>
    
    )
   }
}