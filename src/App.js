import React, { useState } from 'react';
import HomePage from './Homepage';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [loggedIn, setLoggedIn] = useState(false);
  const [time, setTime] = useState(0);
  const [area, setArea] = useState(0);
  const [efficiency, setEfficiency] = useState(0);

  const handleCheck=(randomValue)=>{
    console.log(randomValue);
  }

  const handleButtonClick = () => {
    setCurrentPage('login');
  };

  const handleLogin = (username, password) => {
    
    if (username && password) {
      setCurrentPage('dashboard');
      setLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleIncrement = (field) => {
    if (field === 'time') {
      setTime(time + 1);
    } else if (field === 'area') {
      setArea(area + 1);
    } else if (field === 'efficiency') {
      setEfficiency(efficiency + 1);
    }
  };

  const handleDecrement = (field) => {
    if (field === 'time' && time > 0) {
      setTime(time - 1);
    } else if (field === 'area' && area > 0) {
      setArea(area - 1);
    } else if (field === 'efficiency' && efficiency > 0) {
      setEfficiency(efficiency - 1);
    }
  };

  return (
    <div>
      {currentPage === 'home' && <HomePage handleButtonClick={handleButtonClick} />}
      {currentPage === 'login' && <LoginPage handleLogin={handleLogin} />}
      {currentPage === 'dashboard' && (
        <DashboardPage
          time={time}
          area={area}
          efficiency={efficiency}
          handleCheck={handleCheck}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      )}
    </div>
  );
};

export default App;
