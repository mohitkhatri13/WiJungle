import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { alertsData } from '../Data/Dataone';
const categoryCounts = alertsData.reduce((acc, alert) => {
  if (alert.alert && alert.alert.category) {
    const category = alert.alert.category;
    acc[category] = (acc[category] || 0) + 1;
  }
  return acc;
}, {});

const pieData = {
  labels: Object.keys(categoryCounts),
  datasets: [
    {
      label: 'Alert Categories',
      data: Object.values(categoryCounts),
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  return (
    <div style={{display:'flex' ,flexDirection:'column' }}>
      <h2  className='headings'>Alert Distribution by Category</h2>
      <Pie data={pieData} />
    </div>
  );
};

export default PieChart;
