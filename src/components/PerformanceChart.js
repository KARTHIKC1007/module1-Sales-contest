import React, { useState } from 'react';
import './PerformanceChart.css';

const PerformanceChart = () => {
  const [activeTab, setActiveTab] = useState('1M');
  
  // Mock data for the chart
  const chartData = [
    { week: '1W', value: 3 },
    { week: '2W', value: 7 },
    { week: '3W', value: 15 },
    { week: '4W', value: 9 },
    { week: '5W', value: 18 }
  ];


  const maxValue = 20;

  return (
    <div className="performance-chart-container">
      <div className="chart-tabs">
        <div className="tabs-group">
          {['1M', '3M', '1Y'].map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? 'active' : 'inactive'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      <div className="chart-area">
        <div className="y-axis">
          <div>20%</div>
          <div>15%</div>
          <div>10%</div>
          <div>7%</div>
          <div>5%</div>
          <div>3%</div>
        </div>
        
        <div className="chart-grid">
          {/* Horizontal grid lines */}
          <div className="grid-lines">
            <div className="grid-line" style={{ bottom: '0%' }}></div>
            <div className="grid-line" style={{ bottom: '17%' }}></div>
            <div className="grid-line" style={{ bottom: '35%' }}></div>
            <div className="grid-line" style={{ bottom: '52%' }}></div>
            <div className="grid-line" style={{ bottom: '70%' }}></div>
            <div className="grid-line" style={{ bottom: '87%' }}></div>
            <div className="grid-line" style={{ bottom: '100%' }}></div>
          </div>
          
          {/* Chart bars */}
          <div className="bars-container">
            {chartData.map((item, index) => {
              // Calculate height percentage based on value
              const heightPercentage = (item.value / maxValue) * 100;
              
              return (
                <div key={index} className="bar-column">
                  <div 
                    className="bar"
                    style={{ 
                      height: `${heightPercentage}%`,
                      backgroundColor: '#004080'
                    }}
                  ></div>
                  <div className="x-label">{item.week}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;