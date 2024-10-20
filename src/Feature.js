// src/components/Features.js
import React from 'react';
import './Features.css'; // Ensure this file exists

const Features = () => {
  return (
    <div className="features-container">
         
      <div className="feature-item">
      <img src="4.png"></img>
      <br></br>
      <br></br>
        <h3> Real-Time Monitoring</h3>
        
        <p>Monitor flood risks in real-time with continuous updates and alerts, providing you with up-to-the-minute information to ensure timely and informed decision-making.</p>
      </div>
     
      <div className="feature-item">
      <img src="5.png"></img>
      <br></br>
      <br></br>
      <h3> Historical Record </h3>
     
        <p>Access comprehensive historical flood data with our system’s record feature, allowing you to review past flood events, analyze trends, and gain valuable insights to better prepare for future risks.</p>
      </div>
      
      <div className="feature-item">
      <img src="6.png"></img>
      <h3> Forecasting</h3>
        <p>The Community Alert Feature allows authorities to quickly send critical flood warnings and updates to residents via integrated messaging platforms like Telegram.</p>
      </div>
      <div className="feature-item">
      <img src="7.png"></img>
      <h3>Community Alert </h3>
        <p>The Community Alert Feature allows authorities to quickly send critical flood warnings and updates to residents via integrated messaging platforms like Telegram.</p>
      </div>
    </div>
  );
};

export default Features;