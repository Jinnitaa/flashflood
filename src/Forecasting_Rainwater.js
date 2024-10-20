// WaterLevelChart.js

import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const For_Rainlevel = () => {
    // Generate date data for the x-axis (7-day intervals)
    const generateDayData = () => {
        const dayData = [];
        const now = new Date();
        const startDate = new Date(now.setHours(0, 0, 0, 0)); // Start from today at 12 AM
        
        for (let i = 0; i < 7; i++) {
            const day = new Date(startDate);
            day.setDate(startDate.getDate() + i); // Add i days
            dayData.push(new Date(day)); // Push each day
        }
        return dayData;
    };

    // Generate random water level data for demonstration
    const generateWaterLevelData = (length) => {
        return Array.from({ length }, () => Math.floor(Math.random() * 100)); // Random values from 0 to 100
    };

    const dayLabels = generateDayData();
    const waterLevels = generateWaterLevelData(dayLabels.length);

    const data = {
        labels: dayLabels,
        datasets: [
            {
                label: 'Rain Water Level (mm)',
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
                    unit: 'day', // Change time unit to 'day'
                    stepSize: 1, // Display one label for each day
                    displayFormats: {
                        day: 'MMM dd', // Display format for the x-axis labels (e.g., Oct 20)
                    },
                },
                title: {
                    display: true,
                    text: 'Date',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Rain Water Level (mm)',
                },
                beginAtZero: true,
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `Level: ${context.raw} mm`;
                    },
                },
            },
        },
    };

    return (
        <div>
            <h2>Rain Water Level Monitoring </h2>
            <Line data={data} options={options} />
        </div>
    );
};

export default For_Rainlevel;
