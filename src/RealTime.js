import React from 'react';
import Sidebar from './Sidebar';
import './Realtime.css';
import WaterLevelChart from './WaterLevelChart';
import WaterFlow from './Waterflow';
import Rainwater from './Rainwater';

const RealTime = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <main className="main-content">
            <div className="header1">
                    <h1>Real-Time Monitoring</h1>
                    <div className="user-icon">
                    <img src="/logo (2).png"></img>
                    </div>
                </div>
               <p>Location Steong Prek Thnoat</p>
                <p> Date 15/8/2024</p>
                <div className="contain1">
                    <h3>Flash Flood Alert </h3>
                    <div className="alert-content">
                        <div className="circle-border">
                       <h4>Low Risk</h4>
                        </div>
                        <div className="desc">
                            <p><b>Current Alert Level:</b> Low Risk </p>
                            <br></br>
                            <p><b>Action:</b> Stay Alert </p>  <br></br>
                            <p><b>Description: </b> The water level in this area is currently classified as low risk. This means that the water level is below thresholds that would trigger flood warnings or pose significant risks to property, infrastructure, or public safety.
                            </p>
                            <br></br>

                        </div>
                    </div>

                </div>
              <WaterLevelChart/>
               <WaterFlow/>
               <Rainwater/>
               <div className="contain1">
                <h5>Status</h5>
                <p><span className="red-circle"></span>High Risk : Water level is above 8.88 m </p>
                <p><span className="orange-circle"></span>Medium Risk : Water level is above 5 m and Uder 8.88 m</p>
                <p><span className="green-circle"></span>Low Risk : Water level is below 2m</p>
               
               </div>
              
                
            </main>
        </div>
    );
};

export default RealTime;