import React from 'react';
import { useState } from 'react';
import Sidebar from './Sidebar';
import './Realtime.css';
import WaterLevelChart from './WaterLevelChart';
import WaterFlow from './Waterflow';
import Rainwater from './Rainwater';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const Historical = () => {
    const [selectedDate, setSelectedDate] = useState(dayjs());

    // Function to handle date change
    const handleDateChange = (newValue) => {
        setSelectedDate(newValue);
    };
    return (
        <div className="dashboard">
            <Sidebar />
            <main className="main-content">
            <div className="header1">
                    <h1>Historical Monitoring</h1>
                    <div className="user-icon">
                    <img src="/logo (2).png"></img>
                    </div>
                </div>
               <p>Location Steong Prek Thnoat</p>
                 {/* Display the selected date in DD/MM/YYYY format */}
                 <p>Date: {selectedDate.format('DD/MM/YYYY')}</p>
                 <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker 
                            label="Choose Date" 
                            value={selectedDate} // Set the value of the DatePicker to selectedDate
                            onChange={handleDateChange} // Update the date when changed
                        />
                    </DemoContainer>
                </LocalizationProvider>

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

export default Historical;