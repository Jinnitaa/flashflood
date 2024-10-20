// WaterLevelChart.js

import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const WaterFlow = () => {
    // Generate time data for the x-axis (12 AM to 12 PM with 30 min intervals)
    const generateTimeData = () => {
        const timeData = [];
        const now = new Date();
        const startTime = new Date(now.setHours(0, 0, 0, 0)); // 12 AM today
        const endTime = new Date(now.setHours(12, 0, 0, 0)); // 12 PM today
        
        for (let time = startTime; time <= endTime; time.setMinutes(time.getMinutes() + 30)) {
            timeData.push(new Date(time)); // Push each time interval
        }
        return timeData;
    };

    // Generate random water level data for demonstration
    const generateWaterLevelData = (length) => {
        return Array.from({ length }, () => Math.floor(Math.random() * 100)); // Random values from 0 to 100
    };

    const timeLabels = generateTimeData();
    const waterLevels = generateWaterLevelData(timeLabels.length);

    const data = {
        labels: timeLabels,
        datasets: [
            {
                label: 'Water Flow (m³/s)',
                data: waterLevels,
                borderColor: 'rgba(32, 164, 239)',
                backgroundColor: 'rgba(180, 226, 249)',
                borderWidth: 2,
                fill: true,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'minute',
                    stepSize: 30,
                    displayFormats: {
                        minute: 'HH:mm', // Display format for the x-axis labels
                    },
                },
                title: {
                    display: true,
                    text: 'Time',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Water Flow (m³/s)',
                },
                beginAtZero: true,
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `Level: ${context.raw} m³/s`;
                    },
                },
            },
        },
    };

    return (
        <div>
            <h2>Water Flow Monitoring</h2>
            <Line data={data} options={options} />
        </div>
    );
};

export default WaterFlow;


