import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import { format, parseISO } from 'date-fns';

import { alertsData } from '../Data/Dataone';

const alertsByTime = alertsData.reduce((acc, alert) => {
  const timestamp = format(parseISO(alert.timestamp), 'yyyy-MM-dd HH:mm:ss');
  acc[timestamp] = (acc[timestamp] || 0) + 1;
  return acc;
}, {});

const lineData = {
  labels: Object.keys(alertsByTime),
  datasets: [
    {
      label: 'Alerts Over Time',
      data: Object.values(alertsByTime),
      fill: false,
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const lineOptions = {
  scales: {
    x: {
      type: 'time',
      time: {
        unit: 'second',
        tooltipFormat: 'yyyy-MM-dd HH:mm:ss',
      },
      title: {
        display: true,
        text: 'Time',
      },
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Alert Count',
      },
    },
  },
};

const LineChart = () => {
  return (
    <div style={{display:'flex' ,flexDirection:'column' }}>
      <h2 className='headings'>Alerts Over Time</h2>
      <Line data={lineData} options={lineOptions} />
    </div>
  );
};

export default LineChart;
