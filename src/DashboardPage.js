import React from 'react';

const DashboardPage = ({ time, area, efficiency, handleIncrement, handleDecrement }) => {
  return (
    <div className="dashboard">
      <div className="box">
        <h2>Time in Water</h2>
        <p>Shows the amount of time spent in water</p>
        <button onClick={() => handleDecrement('time')}>-</button>
        <span>{time}</span>
        <button onClick={() => handleIncrement('time')}>+</button>
      </div>
      <div className="box">
        <h2>Area Covered</h2>
        <p>Shows the area covered</p>
        <button onClick={() => handleDecrement('area')}>-</button>
        <span>{area}</span>
        <button onClick={() => handleIncrement('area')}>+</button>
      </div>
      <div className="box">
        <h2>Efficiency</h2>
        <p>Shows the efficiency of the cleaner</p>
        <button onClick={() => handleDecrement('efficiency')}>-</button>
        <span>{efficiency}</span>
        <button onClick={() => handleIncrement('efficiency')}>+</button>
      </div>
    </div>
  );
};

export default DashboardPage;
