import React from 'react';
import './ContestTable.css';

const ContestTable = () => {
  const contestData = [
    { id: 1, team: 'TEAM SALES', contest: 'SALES CONTEST', target: '15%', status: 'UPCOMING' },
    { id: 2, team: 'TEAM MARKETING', contest: 'MARKETING CONTEST', target: '20%', status: 'ONLOGGED' },
    { id: 3, team: 'ALL EMPLOYEE', contest: 'BEST EMPLOYEE CONTEST', target: '10%', status: 'ON GOING' },
    { id: 4, team: 'TEAM MANAGEMENT', contest: 'MANAGEMENT CONTEST', target: '20%', status: 'ON GOING' },
    { id: 5, team: 'ALL TEAMS', contest: 'TEAM CONTEST', target: '30%', status: 'COMPLETE' }
  ];

  return (
    <div className="contest-table">
      <table>
        <thead>
          <tr>
            <th>TEAM NAME</th>
            <th>CONTEST NAME</th>
            <th>TARGET%</th>
            <th>CONTEST UPDATE</th>
          </tr>
        </thead>
        <tbody>
          {contestData.map(item => (
            <tr key={item.id}>
              <td>{item.team}</td>
              <td>{item.contest}</td>
              <td>{item.target}</td>
              <td>
                <span className={`status ${item.status.toLowerCase().replace(' ', '-')}`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button className="prev-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>
        <button className="page-btn">4</button>
        <span className="ellipsis">...</span>
        <button className="page-btn">10</button>
        <button className="next-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
        <div className="items-display">
          Showing
          <select className="items-per-page">
            <option>5</option>
            <option>10</option>
            <option>20</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ContestTable;