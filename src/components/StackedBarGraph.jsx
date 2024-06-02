import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { format, parseISO } from 'date-fns';
import { alertsData } from '../Data/Dataone';
const StackedBarGraph = () => {
  const [barData, setBarData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        // Simulate fetching data from an API or database
        const jsonData = alertsData;
  
        // Process data to get count of alerts by category and time
        const alertsByTimeAndCategory = jsonData.reduce((acc, item) => {
          const timestamp = format(parseISO(item.timestamp), 'yyyy-MM-dd HH:mm:ss');
          const category = item.alert?.category || 'Unknown'; // Check if item.alert exists
  
          if (!acc[timestamp]) {
            acc[timestamp] = {};
          }
  
          if (!acc[timestamp][category]) {
            acc[timestamp][category] = 0;
          }
  
          acc[timestamp][category] += 1;
          return acc;
        }, {});
  
        const timestamps = Object.keys(alertsByTimeAndCategory).sort();
  
        const categories = Array.from(new Set(jsonData.map(item => item.alert?.category || 'Unknown'))); // Check if item.alert exists
  
        const datasets = categories.map(category => ({
          label: category,
          data: timestamps.map(timestamp => alertsByTimeAndCategory[timestamp][category] || 0),
          backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.6)`,
        }));
  
        const barChartData = {
          labels: timestamps,
          datasets: datasets,
        };
  
        setBarData(barChartData);
      };
  
      fetchData();
    }, []);

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Stacked Bar Graph of Alerts by Category Over Time',
      },
    },
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        title: {
          display: true,
          text: 'Alert Count',
        },
      },
    },
  };

  return (
    <div style={{display:'flex' ,flexDirection:'column' }} >
      <h2 className='headings' style={{margin:'auto', marginBottom:'100px',fontSize:'50px',marginTop:'20px' }} >Stacked Bar Graph</h2>
      <div >
      {barData && <Bar data={barData} options={barOptions} />}
      </div>
    </div>
  );
};

export default StackedBarGraph;
