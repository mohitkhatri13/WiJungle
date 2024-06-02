import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { alertsData } from '../Data/Dataone';

// Process data to get count of alerts by signature
const alertCounts = alertsData.reduce((acc, alert) => {
  if (alert.alert && alert.alert.signature) {
    const signature = alert.alert.signature;
    acc[signature] = (acc[signature] || 0) + 1;
  }
  return acc;
}, {});

const data = {
  labels: Object.keys(alertCounts),
  datasets: [
    {
      label: 'Alert Count',
      data: Object.values(alertCounts),
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const BarGraph = () => {
  return (
    <div style={{display:'flex' ,flexDirection:'column' }}>
      <h2  className='headings' style={{margin:'auto', marginBottom:'100px',fontSize:'50px' }}>Alert Counts by Signature</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarGraph;
