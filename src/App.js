import './App.css';
import BarGraph from './components/BarGraph';
import PieChart from './components/PieChart';
import LineChart from './components/LineData';
import StackedBarGraph from './components/StackedBarGraph';
import { useState } from 'react';

function App() {
  const [activeGraph, setActiveGraph] = useState('BarGraph');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 'auto', backgroundColor: 'black', color: 'white', gap: '100px' }}>
      <div className='responsive' style={{ display: 'flex', justifyContent: 'center', margin: '20px', gap: '10px' }}>
        <button className='my-button' onClick={() => setActiveGraph('BarGraph')}>Bar Graph</button>
        <button className='my-button' onClick={() => setActiveGraph('PieChart')}>Pie Chart</button>
        <button className='my-button' onClick={() => setActiveGraph('LineChart')}>Line Graph</button>
        <button className='my-button' onClick={() => setActiveGraph('StackedBarGraph')}>Stacked Bar Graph</button>
      </div>

      <div style={{marginBottom:'100px'}}>
        {activeGraph === 'BarGraph' && (
          <div style={{ width: '90vw', margin: 'auto', }}>
            <BarGraph />
          </div>
        )}
        {activeGraph === 'PieChart' && (
          <div style={{ width: '50vw', margin: 'auto' }}>
            <PieChart />
          </div>
        )}
        {activeGraph === 'LineChart' && (
          <div style={{ width: '90vw', margin: 'auto' }}>
            <LineChart />
          </div>
        )}
        {activeGraph === 'StackedBarGraph' && (
          <div style={{ width: '90vw', margin: 'auto' }}>
            <StackedBarGraph />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
