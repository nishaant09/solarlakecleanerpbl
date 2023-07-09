import React from 'react';
import GalleryPage from './GalleryPage';

const DashboardPage = ({ time, area, efficiency, waste, handleCheck }) => {

     const handleShowResults = () => {
   
    console.log('Show Results');
  };
  const generateRandomValue = () => {
    const randomValue = Math.floor(Math.random() * 51); 
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
      <div className="box">
        <h2>Waste Collected (kg)</h2>
        <p>Shows the amount of waste collected in kilograms</p>
        <span>{waste}</span>
        <button className="check-button" onClick={generateRandomValue}>Check</button>
      </div>
      <button className="show-results-button" onClick={handleShowResults}>
        Show Results
      </button>
    </div>
  );
};

export default DashboardPage;
