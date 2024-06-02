import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { alertsData } from '../Data/Dataone';


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
      backgroundColor: 'rgba(75, 192, 192, 0.7)',
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
      <h2 className='headings' >Alert Counts by Signature</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarGraph;
