import React from 'react';
import './DepartmentDonut.css';

const DepartmentDonut = () => {
  const departmentData = [
    { id: 1, name: 'Marketing', participants: 18, percentage: 62.5, color: '#f05a28' },
    { id: 2, name: 'Management', participants: 11, percentage: 25, color: '#1a95af' },
    { id: 3, name: 'SALES', participants: 9, percentage: 12.5, color: '#a6d8e2' }
  ];

  return (
    <div className="department-donut">
      <div className="donut-chart-container">
        <div className="donut-chart">
          {/* This would be replaced with actual chart */}
          <svg width="180" height="180" viewBox="0 0 180 180">
            <circle cx="90" cy="90" r="60" fill="transparent" stroke="#f05a28" strokeWidth="30" strokeDasharray="188.5 377" />
            <circle cx="90" cy="90" r="60" fill="transparent" stroke="#1a95af" strokeWidth="30" strokeDasharray="94.25 377" strokeDashoffset="-188.5" />
            <circle cx="90" cy="90" r="60" fill="transparent" stroke="#a6d8e2" strokeWidth="30" strokeDasharray="47.125 377" strokeDashoffset="-282.75" />
            <circle cx="90" cy="90" r="45" fill="white" />
          </svg>
        </div>
      </div>
      <div className="department-legend">
        <table className="department-table">
          <thead>
            <tr>
              <th>Department</th>
              <th>Number Of Participants</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            {departmentData.map(dept => (
              <tr key={dept.id}>
                <td>
                  <div className="dept-indicator">
                    <span className="color-dot" style={{ backgroundColor: dept.color }}></span>
                    {dept.name}
                  </div>
                </td>
                <td>{dept.participants}</td>
                <td>{dept.percentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DepartmentDonut;