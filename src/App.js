import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import LeaderBoard from './components/LeaderBoard';
import PerformanceChart from './components/PerformanceChart';
import ContestTable from './components/ContestTable';
import DepartmentDonut from './components/DepartmentDonut';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard-content">
          <div className="top-row">
            <LeaderBoard />
            <PerformanceChart />
          </div>
          <div className="bottom-row">
            <ContestTable />
            <DepartmentDonut />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;