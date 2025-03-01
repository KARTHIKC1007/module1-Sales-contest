import React from 'react';
import './LeaderBoard.css';
import orxan from './oryan.jpg';
import aylaImage from './ayla.jpg';
import sevincImage from './seving.jpg';

const LeaderBoard = () => {
  const leaders = [
    {
      id: 1,
      name: 'Orxan Hüseyinov',
      image: orxan,
      targetPercent: 20,
      achievedPercent: 30,
      increment: 10
    },
    {
      id: 2,
      name: 'Ayla Mammadova',
      image: aylaImage,
      targetPercent: 20,
      achievedPercent: 20,
      increment: 0
    },
    {
      id: 3,
      name: 'Sevinç Aslanova',
      image: sevincImage,
      targetPercent: 20,
      achievedPercent: 20,
      increment: 0
    }
  ];

  return (
    <div className="leader-board">
      <h3 className="board-title">Leader board</h3>
      <div className="leaders-container">
        {leaders.map(leader => (
          <div key={leader.id} className="leader-card">
            <div className="leader-profile">
              <img src={leader.image} alt={leader.name} className="leader-avatar" />
            </div>
            <div className="leader-info">
              <h4 className="leader-name">{leader.name}</h4>
              {leader.increment > 0 && (
                <div className="target-increment">
                  TARGET ACHIEVED BY {leader.increment}% INCREMENT
                </div>
              )}
              <div className="target-achieved">
                TARGET: {leader.targetPercent}% ACHIEVED: {leader.achievedPercent}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;