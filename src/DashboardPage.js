import React from 'react';

const DashboardPage = ({ time, area, efficiency, handleCheck }) => {
  const generateRandomValue = () => {
    const randomValue = Math.floor(Math.random() * 51); // Generates a random value between 0 and 50
    handleCheck(randomValue);
  };

  return (
    <div className="dashboard">
      <div className="box">
        <h2>Time in Water</h2>
        <p>Shows the amount of time spent in water</p>
        <span>{time}</span>
        <button className="check-button" onClick={generateRandomValue}>Check</button>
      </div>
      <div className="box">
        <h2>Area Covered</h2>
        <p>Shows the area covered in water</p>
        <span>{area}</span>
        <button className="check-button" onClick={generateRandomValue}>Check</button>
      </div>
      <div className="box">
        <h2>Efficiency</h2>
        <p>Shows the efficiency of the cleaner</p>
        <span>{efficiency}</span>
        <button className="check-button" onClick={generateRandomValue}>Check</button>
      </div>
    </div>
  );
};

export default DashboardPage;

