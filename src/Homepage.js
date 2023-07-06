import React from 'react';

const HomePage = ({ handleButtonClick }) => {
  return (
    <div className="homepage">
      <h1 className="heading">Solar Lake Cleaner</h1>
      <button className="button" onClick={handleButtonClick}>
        Tap to see how it works
      </button>
    </div>
  );
};

export default HomePage;
