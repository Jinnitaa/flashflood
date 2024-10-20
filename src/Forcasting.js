import React from 'react';
import Sidebar from './Sidebar';
import './Realtime.css';
import WaterLevelChart from './WaterLevelChart';
import WaterFlow from './Waterflow';
import Rainwater from './Rainwater';
import For_Waterlevel from './Forecasting_Waterlevel';
import For_Waterflow from './Forecasting_Waterflow';
import For_Rainlevel from './Forecasting_Rainwater';

const Forecasting = () => {
    
    return (
        <div className="dashboard">
            <Sidebar />
            <main className="main-content">
            <div className="header1">
                    <h1>Forecasting Monitoring</h1>
                    <div className="user-icon">
                    <img src="/logo (2).png"></img>
                    </div>
                </div>
               <p>Location Steong Prek Thnoat</p>
              <For_Waterlevel/>
               <For_Waterflow/>
               <For_Rainlevel/>
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

export default Forecasting;